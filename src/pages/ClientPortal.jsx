import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Shield, KeyRound, AlertCircle, ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ClientPortal() {
  const [attempted, setAttempted] = useState(false);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Client Portal Gateway" }]} />
          <span className="eyebrow" style={{ justifyContent: "center" }}>SECURE VAULT GATEWAY</span>
          <h1 className="page-hero-title">
            NHS Client Portal Access
          </h1>
          <p className="page-hero-desc text-lead" style={{ margin: "0 auto" }}>
            Authorized client gateway for secure ledger document exchange, monthly management packages, and tax audit workpapers.
          </p>
        </div>
      </section>

      {/* Portal Entry Box */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "520px" }}>
          <div style={{ backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)", padding: "2.5rem 2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "var(--color-accent)", marginBottom: "1.5rem" }}>
              <Lock size={20} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                256-Bit Encrypted Session
              </span>
            </div>

            {attempted ? (
              <div style={{ padding: "1.5rem", backgroundColor: "#FFF8E1", border: "1px solid #FFE082", marginBottom: "1.5rem", fontSize: "0.88rem", color: "#5D4037" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  <AlertCircle size={18} style={{ color: "#F57F17" }} />
                  <span>Portal Gateway In Deployment</span>
                </div>
                <p>
                  The production client portal is currently undergoing scheduled infrastructure updates to support new UAE FTA API direct integrations. Please transmit immediate audit files via your dedicated encrypted email channel or contact our advisory desk directly at +971 4 254 3004.
                </p>
              </div>
            ) : null}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAttempted(true);
              }}
            >
              <div className="form-group">
                <label className="form-label" htmlFor="portal-client-id">
                  Client Identifier / Tax Registration Number (TRN)
                </label>
                <input
                  id="portal-client-id"
                  type="text"
                  className="form-input"
                  placeholder="e.g. 100-XXXX-XXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="portal-pass">
                  Security Passphrase
                </label>
                <input
                  id="portal-pass"
                  type="password"
                  className="form-input"
                  placeholder="••••••••••••"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "1rem" }}>
                <span>Authenticate & Access Vault</span>
                <ArrowRight size={14} className="icon-arrow" />
              </button>
            </form>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)", textAlign: "center", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
              <span>Need portal credentials or password reset? </span>
              <Link to="/contact" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
                Contact Advisory Desk
              </Link>
            </div>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Shield size={14} /> SOC2 Type II Certified
            </span>
            <span>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <KeyRound size={14} /> Hardware 2FA Enforced
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
