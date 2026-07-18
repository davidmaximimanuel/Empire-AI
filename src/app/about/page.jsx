"use client";
import { useLogto } from "@logto/react";
import ThemeToggle from "../ThemeToggle";

export default function About() {
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

      <div className="container">
        <h1>Our Story</h1>
        <p style={{ fontSize: "20px", color: "var(--text)" }}>Built to make intelligence accessible to everyone.</p>
        <p>AIM is an AI assistant designed around how people actually think — fast, contextual, and deeply personal. We believe AI should feel like a thought partner, not a tool.</p>

        <h2>Our Core Principles</h2>
        <p><strong style={{ color: "var(--text)" }}>Speed over everything:</strong> Every interaction is engineered to be instant. No loading screens, no friction — just answers when you need them.</p>
        <p><strong style={{ color: "var(--text)" }}>Privacy by default:</strong> Your data is yours. We never train on your conversations, and you can delete everything at any time.</p>
        <p><strong style={{ color: "var(--text)" }}>Built for builders:</strong> From solo founders to large teams, AIM adapts to how you work — with projects, memory, and shared context.</p>
        <p><strong style={{ color: "var(--text)" }}>Continuously improving:</strong> AIM learns from broad research, not your personal data. Every model update makes it sharper, not more intrusive.</p>

        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2023 — Q1</div>
            <h3 className="timeline-title">Idea & First Prototype</h3>
            <p>AIM started as a side project — a smarter chat interface for personal use. The first prototype ran in a browser tab.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023 — Q4</div>
            <h3 className="timeline-title">Private Beta Launch</h3>
            <p>500 early users tested the memory and projects system. Feedback shaped everything that came next.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024 — Q2</div>
            <h3 className="timeline-title">Public Launch & AIM 2.0</h3>
            <p>Opened to the public with a completely rebuilt model. 100k users in the first month.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2025 — Present</div>
            <h3 className="timeline-title">Empire AI Expansion</h3>
            <p>Expanding into team collaboration, advanced memory, and deeper integrations under the Empire AI umbrella.</p>
          </div>
        </div>
      </div>

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