import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: "720px", textAlign: "center", padding: "5rem 1.5rem" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          ERROR 404 • ENTRY NOT FOUND
        </span>

        <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginBottom: "1.25rem", marginTop: "0.5rem" }}>
          This Page Lies Outside the Ledger.
        </h1>

        <p className="text-lead" style={{ maxWidth: "520px", margin: "0 auto 2.5rem auto" }}>
          The document or resource you requested may have been relocated, archived, or does not exist in our public directory.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary">
            <span>Return to Homepage</span>
            <ArrowRight size={14} className="icon-arrow" />
          </Link>
          <Link to="/services" className="btn btn-outline">
            <span>Explore Services</span>
          </Link>
          <Link to="/contact" className="btn btn-outline">
            <span>Contact Practice Desk</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
