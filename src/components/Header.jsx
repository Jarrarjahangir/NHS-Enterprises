import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MapPin, Phone, Search, ChevronDown, Menu, X, Globe, ArrowRight } from "lucide-react";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevKey, setPrevKey] = useState(location.key);
  if (prevKey !== location.key) {
    setPrevKey(location.key);
    setMobileMenuOpen(false);
  }

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        {/* Top Utility Bar */}
        <div className="top-utility-bar">
          <div className="container utility-inner">
            <div className="utility-location" style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={13} style={{ color: "var(--color-accent)" }} />
                <span>Port Saeed, Deira, Dubai</span>
              </span>
              <span style={{ color: "var(--color-border)" }}>|</span>
              <a href="tel:+97142543004" className="utility-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }} title="Call Office Landline">
                <Phone size={12} style={{ color: "var(--color-accent)" }} />
                <span>+971 4 254 3004</span>
              </a>
              <span style={{ color: "var(--color-border)" }}>|</span>
              <a href="tel:+971506913880" className="utility-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }} title="Call Office Mobile">
                <span>+971 50 691 3880</span>
              </a>
            </div>

            <div className="utility-links">
              <Link to="/client-portal" className="utility-link">
                Client Portal
              </Link>
              <span style={{ color: "var(--color-border)" }}>|</span>
              <Link to="/careers" className="utility-link">
                Careers
              </Link>
              <span style={{ color: "var(--color-border)" }}>|</span>
              <Link to="/insights" className="utility-link">
                Insights
              </Link>
              <span style={{ color: "var(--color-border)" }}>|</span>
              <button
                type="button"
                className="utility-search-btn"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search dialog"
              >
                <Search size={13} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="main-nav-bar">
          <div className="container main-nav-inner">
            {/* Brand Logo */}
            <Link to="/" className="brand-logo" aria-label="NHS Enterprises Home">
              <span className="logo-serif">NHS</span>
              <div className="logo-tag">
                <span className="logo-tag-primary">Enterprises</span>
                <span className="logo-tag-sub">Accounting & Tax Consultancy</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" aria-label="Primary Navigation">
              <div className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} end>
                  Home
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  About
                </NavLink>
              </div>

              {/* Services Dropdown */}
              <div className="nav-item">
                <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  Services <ChevronDown size={14} />
                </NavLink>
                <div className="nav-dropdown">
                  <Link to="/services/accounting" className="dropdown-item">
                    <strong>Accounting</strong>
                    <span className="dropdown-item-desc">Statutory IFRS & financial reporting</span>
                  </Link>
                  <Link to="/services/bookkeeping" className="dropdown-item">
                    <strong>Bookkeeping</strong>
                    <span className="dropdown-item-desc">Organized records & daily reconciliations</span>
                  </Link>
                  <Link to="/services/tax" className="dropdown-item">
                    <strong>Tax Consultancy</strong>
                    <span className="dropdown-item-desc">UAE Corporate Tax & VAT compliance</span>
                  </Link>
                  <Link to="/services/audit" className="dropdown-item">
                    <strong>Audit & Assurance</strong>
                    <span className="dropdown-item-desc">Independent statutory & internal audits</span>
                  </Link>
                  <Link to="/services/cfo-services" className="dropdown-item">
                    <strong>CFO Services</strong>
                    <span className="dropdown-item-desc">Strategic executive financial stewardship</span>
                  </Link>
                  <Link to="/services/financial-advisory" className="dropdown-item">
                    <strong>Financial Advisory</strong>
                    <span className="dropdown-item-desc">Valuations, M&A due diligence & modeling</span>
                  </Link>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="nav-item">
                <NavLink to="/industries" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  Industries <ChevronDown size={14} />
                </NavLink>
                <div className="nav-dropdown" style={{ width: "320px" }}>
                  <Link to="/industries/real-estate-construction" className="dropdown-item">
                    <strong>Real Estate & Construction</strong>
                  </Link>
                  <Link to="/industries/trading-distribution" className="dropdown-item">
                    <strong>Trading & Distribution</strong>
                  </Link>
                  <Link to="/industries/manufacturing-industrials" className="dropdown-item">
                    <strong>Manufacturing & Industrials</strong>
                  </Link>
                  <Link to="/industries/retail-ecommerce" className="dropdown-item">
                    <strong>Retail & E-commerce</strong>
                  </Link>
                  <Link to="/industries/hospitality-tourism" className="dropdown-item">
                    <strong>Hospitality & Tourism</strong>
                  </Link>
                  <Link to="/industries/professional-services" className="dropdown-item">
                    <strong>Professional Services</strong>
                  </Link>
                  <Link to="/industries" className="dropdown-item" style={{ color: "var(--color-accent)", borderTop: "1px solid var(--color-border-light)", marginTop: "4px" }}>
                    <strong>View All 10 Sectors →</strong>
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <NavLink to="/insights" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  Insights
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  Contact
                </NavLink>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="nav-actions">
              <Link to="/book-consultation" className="btn btn-primary" id="header-cta-btn">
                <span>Book a Consultation</span>
                <ArrowRight size={14} className="icon-arrow" />
              </Link>

              <div className="lang-selector" title="Language selection">
                <Globe size={14} />
                <span>EN</span>
              </div>

              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "is-open" : ""}`} aria-hidden={!mobileMenuOpen}>
          <div className="mobile-nav-header">
            <Link to="/" className="brand-logo" aria-label="NHS Enterprises Home" onClick={() => setMobileMenuOpen(false)}>
              <span className="logo-serif">NHS</span>
              <div className="logo-tag">
                <span className="logo-tag-primary">Enterprises</span>
                <span className="logo-tag-sub">Accounting & Tax Consultancy</span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile navigation"
              style={{ padding: "8px" }}
            >
              <X size={26} />
            </button>
          </div>

          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <div className="mobile-nav-sublinks">
                <Link to="/services/accounting" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>• Accounting</Link>
                <Link to="/services/bookkeeping" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>• Bookkeeping</Link>
                <Link to="/services/tax" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>• Tax Consultancy</Link>
                <Link to="/services/audit" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>• Audit & Assurance</Link>
                <Link to="/services/cfo-services" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>• CFO Services</Link>
                <Link to="/services/financial-advisory" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>• Financial Advisory</Link>
              </div>
            </div>

            <Link to="/industries" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Industries
            </Link>
            <Link to="/insights" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/client-portal" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.2rem", color: "var(--color-accent)" }}>
              Client Portal
            </Link>
          </div>

          <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
            <Link
              to="/book-consultation"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={14} className="icon-arrow" />
            </Link>
            <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.82rem", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              <div>Office 302-4, Al Babtain Bldg, Port Saeed, Deira, Dubai</div>
              <div style={{ marginTop: "4px" }}>
                <a href="tel:+97142543004" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>+971 4 254 3004</a>
                {" • "}
                <a href="tel:+971506913880" style={{ color: "var(--color-text-primary)" }}>+971 50 691 3880</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Global Interactive Search Modal */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
