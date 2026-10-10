import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo" aria-label="NHS Enterprises Home" style={{ marginBottom: "1.25rem" }}>
              <span className="footer-logo-serif">NHS</span>
              <div className="logo-tag">
                <span className="logo-tag-primary" style={{ color: "#FFFFFF" }}>Enterprises</span>
                <span className="logo-tag-sub">Accounting & Tax Consultancy</span>
              </div>
            </Link>

            <p className="footer-desc">
              NHS Enterprises (NHS ENT Accounting & Tax Consultancy) is an established UAE firm providing institutional-grade accounting, audit, corporate tax, and strategic financial advisory services to help businesses navigate complexity and grow with confidence.
            </p>

            <div className="footer-social-row">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/nhs-financial-advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="NHS Enterprises on LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://twitter.com/nhs_advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="NHS Enterprises on X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/nhsfinancialadvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="NHS Enterprises on Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/industries" className="footer-link">Industries We Serve</Link></li>
              <li><Link to="/insights" className="footer-link">Insights & Updates</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links-list">
              <li><Link to="/services/accounting" className="footer-link">Accounting</Link></li>
              <li><Link to="/services/bookkeeping" className="footer-link">Bookkeeping</Link></li>
              <li><Link to="/services/tax" className="footer-link">Tax Consultancy</Link></li>
              <li><Link to="/services/audit" className="footer-link">Audit & Assurance</Link></li>
              <li><Link to="/services/cfo-services" className="footer-link">CFO Services</Link></li>
              <li><Link to="/services/financial-advisory" className="footer-link">Financial Advisory</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-line">
                <MapPin size={17} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  Office 302-4, Al Babtain Building, Port Saeed, Deira, Dubai, UAE<br />
                  <span style={{ fontSize: "0.78rem", color: "var(--color-dark-muted)" }}>Postcode: 282952</span>
                </span>
              </div>
              <div className="footer-contact-line">
                <Phone size={17} style={{ flexShrink: 0, marginTop: "3px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <a href="tel:+97142543004" className="footer-link" title="Call Office Landline">
                    Landline: +971 4 254 3004
                  </a>
                  <a href="tel:+971506913880" className="footer-link" title="Call Office Mobile">
                    Mobile: +971 50 691 3880
                  </a>
                </div>
              </div>
              <div className="footer-contact-line">
                <Mail size={17} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span className="footer-link" style={{ fontSize: "0.82rem", color: "var(--color-dark-muted)" }}>
                  Inquiries: Call or Book via Consultation Desk
                </span>
              </div>
            </div>

            <Link to="/book-consultation" className="btn btn-white" style={{ width: "100%", justifyContent: "center" }}>
              <span>Book a Consultation</span>
              <ArrowRight size={14} className="icon-arrow" />
            </Link>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {CURRENT_YEAR} NHS Enterprises • NHS ENT Accounting & Tax Consultancy. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span style={{ color: "var(--color-dark-border)" }}>•</span>
            <Link to="/terms-of-use" className="footer-legal-link">Terms of Use</Link>
            <span style={{ color: "var(--color-dark-border)" }}>•</span>
            <Link to="/sitemap" className="footer-legal-link">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
