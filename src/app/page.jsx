"use client";
import { useLogto } from "@logto/react";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  const { signIn, signOut, isAuthenticated, getAccessToken } = useLogto();

  const handleSignIn = async () => {
    try {
      await signIn(`${window.location.origin}/callback`);
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleSignOut = () => {
    signOut(window.location.origin);
  };

  const handleIdClick = () => {
    if (isAuthenticated) {
      window.open("https://id.empireunion.xyz/account/security", "_blank", "noopener,noreferrer");
    } else {
      handleSignIn();
    }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("Delete your Empire ID and all your data? This can't be undone.")) return;
    try {
      const token = await getAccessToken();
      if (!token) {
        alert("Could not verify your session. Try signing out and back in, then retry.");
        return;
      }
      const res = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      alert(data.message);
      signOut(window.location.origin);
    } catch (err) {
      console.error('Delete account error:', err);
      alert('Something went wrong deleting your account. Please try again.');
    }
  };

  // Auto-check for an existing cross-app session (e.g. already signed in
  // via empireunion.xyz) once per browser session. If a session exists,
  // Logto completes it silently during this redirect — no login form
  // shown. If not, the visitor lands on Logto's real sign-in page; the
  // callback page detects this was a silent check and quietly sends them
  // back home instead of showing an error.
  useEffect(() => {
    if (isAuthenticated) return;
    if (sessionStorage.getItem("empireai_auto_signin_done") === "1") return;

    sessionStorage.setItem("empireai_auto_signin_done", "1");
    sessionStorage.setItem("empireai_auto_signin", "1");
    signIn(`${window.location.origin}/callback`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <>
      <header>
        <a href="/" className="brand">
          <img src="/empire-ai-logo.png" alt="Empire AI Logo" />
        </a>
        <nav>
          <a href="/about">About</a>
          <a href="/developer">Developer</a>
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <button onClick={handleIdClick}>My ID</button>
              <button onClick={handleSignOut}>Sign out</button>
              <button onClick={handleDeleteAccount} style={{ color: '#e05c5c' }}>Delete account</button>
            </>
          ) : (
            <button onClick={handleSignIn}>Sign in</button>
          )}
          <a href="https://t.me/askaimbot" className="btn">Get started free</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Think faster with AI that knows you.</h1>
        <p>AIM is your intelligent thought partner — built for founders, creators, and builders who need answers that actually fit their context.</p>
        <a href="https://t.me/askaimbot" className="btn" style={{ fontSize: "16px", padding: "14px 28px" }}>Start chatting with AIM</a>
        <span className="telegram-note">via Telegram (@askaimbot) • No credit card needed</span>
      </section>

      <div className="demo-box">
        <div className="demo-header">💬 AIM — New conversation</div>
        <div className="demo-msg">
          <strong>You:</strong> Help me write an investor pitch for my solar system explorer app.
        </div>
        <div className="demo-msg" style={{ borderLeftColor: "var(--text)" }}>
          <strong>AIM:</strong> Here's a compelling opening for your pitch:<br /><br />
          <em>"Space Maps turns the solar system into a living, interactive experience — real-time planetary data, 3D navigation, and an AI guide all in one place. We're bringing the observatory to everyone's pocket."</em><br /><br />
          Want me to continue with market size, traction, and the ask?
        </div>
      </div>

      <section className="features">
        <div className="feature"><h3> Persistent Memory</h3><p>AIM remembers your projects, preferences, and context across every conversation.</p></div>
        <div className="feature"><h3>📁 Projects & Context</h3><p>Organise conversations, files, and instructions into focused workspaces.</p></div>
        <div className="feature"><h3>📄 File Understanding</h3><p>Upload PDFs, docs, and data. AIM reads, summarises, and reasons over your files.</p></div>
        <div className="feature"><h3>💻 Code & Technical Help</h3><p>Write, debug, and explain code across any language. AIM understands your stack.</p></div>
        <div className="feature"><h3>👥 Team Collaboration</h3><p>Share projects, conversation history, and custom instructions with your whole team.</p></div>
        <div className="feature"><h3>🌍 Always Available</h3><p>Web, mobile, and Telegram. AIM is there when inspiration strikes.</p></div>
      </section>

      <section className="cta-section">
        <h2>Ready to think with AIM?</h2>
        <p>Join thousands of founders, creators, and builders already using AIM every day.</p>
        <a href="https://t.me/askaimbot" className="btn" style={{ fontSize: "16px", padding: "14px 28px" }}>Start chatting with AIM</a>
        <span className="telegram-note">via Telegram (@askaimbot) • No credit card needed</span>
      </section>

      <footer>
        <div>© 2026 Empire AI. All rights reserved.</div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/developer">Developer</a>
          <a href="https://empireunion.xyz/privacy">Privacy</a>
          <a href="https://empireunion.xyz/terms">Terms</a>
        </div>
      </footer>
    </>
  );
}