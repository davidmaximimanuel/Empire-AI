"use client";
import { useLogto } from "@logto/react";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  const { signIn } = useLogto();

  const handleSignIn = async () => {
    try {
      await signIn(`${window.location.origin}/callback`);
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <>
      <header>
        <a href="/" className="brand">
          <img src="/empire-ai-logo.png" alt="Empire AI Logo" />
        </a>
        <nav>
          <a href="/about">About</a>
          <a href="#developer">Developer</a>
          <ThemeToggle />
          <button onClick={handleSignIn}>Sign in</button>
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
          <a href="#developer">Developer</a>
          <a href="https://empireunion.xyz/privacy">Privacy</a>
          <a href="https://empireunion.xyz/terms">Terms</a>
        </div>
      </footer>
    </>
  );
}