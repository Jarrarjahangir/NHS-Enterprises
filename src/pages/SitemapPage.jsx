import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { servicesData } from "../data/servicesData";
import { industriesData } from "../data/industriesData";
import { insightsData } from "../data/insightsData";

export default function SitemapPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "HTML Sitemap" }]} />
          <span className="eyebrow">SITE ARCHITECTURE</span>
          <h1 className="page-hero-title">Website Directory & Sitemap</h1>
          <p className="page-hero-desc text-lead">
            Comprehensive navigational index of all public practice pages, industry resources, and thought leadership articles published by NHS Enterprises.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem" }}>
            {/* Main Pages */}
            <div>
              <h2 style={{ fontSize: "1.25rem", borderBottom: "2px solid var(--color-accent)", paddingBottom: "0.5rem", marginBottom: "1.25rem" }}>
                Main Pages
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                <li><Link to="/" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Home</Link></li>
                <li><Link to="/about" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• About NHS Enterprises</Link></li>
                <li><Link to="/services" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Services Directory</Link></li>
                <li><Link to="/industries" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Industries We Serve</Link></li>
                <li><Link to="/insights" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Insights & Publications</Link></li>
                <li><Link to="/contact" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Contact Practice Desk</Link></li>
                <li><Link to="/book-consultation" style={{ color: "var(--color-accent)", fontWeight: 700 }}>• Book a Consultation</Link></li>
                <li><Link to="/careers" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Careers at NHS</Link></li>
                <li><Link to="/client-portal" style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>• Client Portal Access</Link></li>
              </ul>
            </div>

            {/* Practices */}
            <div>
              <h2 style={{ fontSize: "1.25rem", borderBottom: "2px solid var(--color-accent)", paddingBottom: "0.5rem", marginBottom: "1.25rem" }}>
                Services & Practices
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {servicesData.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} style={{ color: "var(--color-text-secondary)" }}>
                      • {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h2 style={{ fontSize: "1.25rem", borderBottom: "2px solid var(--color-accent)", paddingBottom: "0.5rem", marginBottom: "1.25rem" }}>
                Industry Sectors
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {industriesData.map((i) => (
                  <li key={i.slug}>
                    <Link to={`/industries/${i.slug}`} style={{ color: "var(--color-text-secondary)" }}>
                      • {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research & Legal */}
            <div>
              <h2 style={{ fontSize: "1.25rem", borderBottom: "2px solid var(--color-accent)", paddingBottom: "0.5rem", marginBottom: "1.25rem" }}>
                Insights & Legal
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
                {insightsData.map((a) => (
                  <li key={a.slug}>
                    <Link to={`/insights/${a.slug}`} style={{ color: "var(--color-text-secondary)" }}>
                      • {a.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 style={{ fontSize: "1.1rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "0.35rem", marginBottom: "0.85rem" }}>
                Governance & Policies
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><Link to="/privacy-policy" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>• Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>• Terms of Use</Link></li>
                <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>• XML Sitemap (Search Engines)</a></li>
                <li><a href="/robots.txt" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>• robots.txt</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
