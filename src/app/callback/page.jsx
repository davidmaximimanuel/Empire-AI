"use client";
import { useHandleSignInCallback, useLogto } from "@logto/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Callback() {
  const { getIdTokenClaims } = useLogto();
  const router = useRouter();
  const [status, setStatus] = useState("Completing sign in...");
  const [hasError, setHasError] = useState(false);

  // FIX: callback passed DIRECTLY into the hook (Logto's documented
  // pattern) instead of reading {isLoading, error} in a separate effect —
  // that older pattern could fire before the SDK's session state was
  // actually settled, making getIdTokenClaims() throw "Not authenticated"
  // even right after a real successful sign-in.
  const { isLoading, error } = useHandleSignInCallback(async () => {
    const wasSilentCheck = sessionStorage.getItem("empireai_auto_signin") === "1";
    sessionStorage.removeItem("empireai_auto_signin");

    if (error) {
      if (wasSilentCheck) {
        // This was just a background "are you already signed in elsewhere?"
        // check, not something the visitor asked for — no session existed,
        // which is completely normal. Don't scare them with an error screen.
        router.push("/");
        return;
      }
      setStatus("Sign in failed. Please try again.");
      setHasError(true);
      console.error("Login error:", error);
      return;
    }

    setStatus("Success! Setting up your Empire ID...");

    try {
      const claims = await getIdTokenClaims();

      const res = await fetch("/api/empire-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          logto_id: claims?.sub,
          username: claims?.name || claims?.username || "",
          email: claims?.email || "",
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        console.error("Empire ID API error:", data.error);
      } else {
        console.log("Empire ID:", data.empire_id);
      }
    } catch (err) {
      console.error("Empire ID API error:", err);
    } finally {
      setStatus("Success! Redirecting...");
      setTimeout(() => router.push("/"), wasSilentCheck ? 0 : 1200);
    }
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "var(--primary)" }}>{isLoading ? "Completing sign in..." : status}</h2>
        {hasError && error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    </div>
  );
}