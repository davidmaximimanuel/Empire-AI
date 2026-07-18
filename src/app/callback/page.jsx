"use client";
import { useHandleSignInCallback } from "@logto/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Callback() {
  const { isLoading, error } = useHandleSignInCallback();
  const router = useRouter();
  const [status, setStatus] = useState("Completing sign in...");

  useEffect(() => {
    if (error) {
      setStatus("Sign in failed. Please try again.");
    } else if (!isLoading) {
      setStatus("Success! Redirecting...");
      setTimeout(() => router.push("/"), 1500);
    }
  }, [isLoading, error, router]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "var(--primary)" }}>{status}</h2>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    </div>
  );
}