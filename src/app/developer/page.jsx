"use client";
import { useLogto } from "@logto/react";

export default function Developer() {
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
          <a href="#developer" className="active">Developer</a>
          <button onClick={handleSignIn}>Sign in</button>
          <a href="https://t.me/askaimbot" className="btn">Get started free</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Developer Resources</h1>
        <p>Build with the tools that power Empire AI's intelligent thought partner</p>
      </section>

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div className="features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))" }}>
          {/* eConnect Card */}
          <div className="feature" style={{ background: "#1A1108", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", height: "100%" }}>
            <h3 style={{ margin: "0 0 16px 0", color: "#2596be", fontSize: "24px" }}>eConnect</h3>
            <p style={{ color: "var(--muted)", fontSize: "16px", marginBottom: "24px" }}>
              <strong style={{ color: "var(--text)" }}>The Elevator Pitch</strong>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: "1.6" }}>
              eConnect is a unified, multi-tenant API platform that allows developers to integrate Messaging, Music, and Productivity tools into their apps using a single, simple SDK. Instead of reading 10 different API documentations, a developer writes one line of code, and eConnect handles the routing, authentication, and formatting.
            </p>
            
            <div style={{ 
              background: "rgba(37, 150, 190, 0.1)", 
              border: "1px solid var(--border)", 
              borderRadius: "8px", 
              padding: "20px", 
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "8px", 
                  background: "#2596be", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>API</span>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "var(--text)", fontSize: "18px" }}>Single Integration Point</h4>
                  <p style={{ color: "var(--muted)", fontSize: "14px", margin: "0" }}>One SDK for all services</p>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "8px", 
                  background: "#2596be", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>Auth</span>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "var(--text)", fontSize: "18px" }}>Unified Authentication</h4>
                  <p style={{ color: "var(--muted)", fontSize: "14px", margin: "0" }}>Single auth flow for all services</p>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "8px", 
                  background: "#2596be", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>Doc</span>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "var(--text)", fontSize: "18px" }}>Unified Documentation</h4>
                  <p style={{ color: "var(--muted)", fontSize: "14px", margin: "0" }}>One place for all API references</p>
                </div>
              </div>
            </div>
          </div>

          {/* AIM API Card */}
          <div className="feature" style={{ 
            background: "#1A1108", 
            border: "1px solid var(--border)", 
            borderRadius: "12px", 
            padding: "32px", 
            height: "100%",
            opacity: "0.6",
            cursor: "not-allowed"
          }}>
            <h3 style={{ margin: "0 0 16px 0", color: "var(--muted)", fontSize: "24px" }}>AIM API</h3>
            <p style={{ color: "var(--muted)", fontSize: "16px", marginBottom: "24px" }}>
              <strong style={{ color: "var(--text)" }}>Coming Soon</strong>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
              The next generation of AI tools for developers. The AIM API will provide a unified interface to Empire AI's intelligence capabilities.
            </p>
            
            <div style={{ 
              background: "#2A1F10", 
              border: "1px solid var(--border)", 
              borderRadius: "8px", 
              padding: "20px", 
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <div style={{ 
                padding: "12px", 
                background: "rgba(37, 150, 190, 0.1)",
                borderRadius: "8px"
              }}>
                <h4 style={{ margin: "0 0 8px 0", color: "var(--text)", fontSize: "18px" }}>Core Capabilities</h4>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "12px"
                }}>
                  <div style={{ 
                    padding: "8px", 
                    background: "rgba(37, 150, 190, 0.1)",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>TTS</div>
                  <div style={{ 
                    padding: "8px", 
                    background: "rgba(37, 150, 190, 0.1)",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>STT</div>
                  <div style={{ 
                    padding: "8px", 
                    background: "rgba(37, 150, 190, 0.1)",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>Image Generation</div>
                  <div style={{ 
                    padding: "8px", 
                    background: "rgba(37, 150, 190, 0.1)",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>Vision</div>
                  <div style={{ 
                    padding: "8px", 
                    background: "rgba(37, 150, 190, 0.1)",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>File Understanding</div>
                  <div style={{ 
                    padding: "8px", 
                    background: "rgba(37, 150, 190, 0.1)",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>Code Analysis</div>
                </div>
              </div>
            </div>
            
            <div style={{ 
              marginTop: "24px",
              background: "#2A1F10",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center"
            }}>
              <div style={{ 
                background: "rgba(37, 150, 190, 0.1)",
                color: "#2596be",
                borderRadius: "6px",
                padding: "8px 16px",
                display: "inline-block",
                fontSize: "14px"
              }}>Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      <section className="cta-section">
        <h2>Ready to build with Empire AI?</h2>
        <p>Join thousands of developers already building the future of intelligence.</p>
        <a href="https://t.me/askaimbot" className="btn" style={{ fontSize: "16px", padding: "14px 28px" }}>Start building</a>
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