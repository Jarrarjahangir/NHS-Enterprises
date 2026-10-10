import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, FileText, Briefcase, Layers } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { industriesData } from "../data/industriesData";
import { insightsData } from "../data/insightsData";

export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const cleanQ = query.trim().toLowerCase();

  const filteredServices = cleanQ
    ? servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(cleanQ) ||
          s.shortDesc.toLowerCase().includes(cleanQ) ||
          s.tagline.toLowerCase().includes(cleanQ)
      )
    : [];

  const filteredIndustries = cleanQ
    ? industriesData.filter(
        (i) =>
          i.name.toLowerCase().includes(cleanQ) ||
          i.overview.toLowerCase().includes(cleanQ)
      )
    : [];

  const filteredInsights = cleanQ
    ? insightsData.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQ) ||
          a.excerpt.toLowerCase().includes(cleanQ) ||
          a.category.toLowerCase().includes(cleanQ)
      )
    : [];

  const hasResults =
    filteredServices.length > 0 ||
    filteredIndustries.length > 0 ||
    filteredInsights.length > 0;

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className="search-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search NHS Enterprises"
    >
      <div className="search-modal-box">
        <div className="search-modal-input-wrap">
          <Search size={20} style={{ color: "var(--color-accent)" }} />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search services, UAE tax, industries, insights..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search dialog"
            style={{ padding: "4px", color: "var(--color-text-secondary)" }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="search-modal-results">
          {!cleanQ && (
            <div style={{ padding: "2rem", textAlign: "center", color: "var(--color-text-muted)" }}>
              <p style={{ fontSize: "0.9rem" }}>Type keywords like "Corporate Tax", "Audit", "Real Estate", or "CFO" to explore our expertise.</p>
            </div>
          )}

          {cleanQ && !hasResults && (
            <div style={{ padding: "2.5rem 1.5rem", textAlign: "center", color: "var(--color-text-muted)" }}>
              <p style={{ fontSize: "0.95rem" }}>No matching results found for "{query}".</p>
              <button
                type="button"
                className="btn btn-outline"
                style={{ marginTop: "1rem", fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                onClick={() => handleSelect("/contact")}
              >
                Inquire directly with our team →
              </button>
            </div>
          )}

          {filteredServices.length > 0 && (
            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ padding: "0.5rem 1.5rem", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-accent)", fontWeight: 700 }}>
                Services ({filteredServices.length})
              </div>
              {filteredServices.map((s) => (
                <div
                  key={s.slug}
                  className="search-result-item"
                  onClick={() => handleSelect(`/services/${s.slug}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Briefcase size={14} style={{ color: "var(--color-accent)" }} />
                    <span className="search-result-title">{s.title}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "2px" }}>{s.shortDesc}</p>
                </div>
              ))}
            </div>
          )}

          {filteredIndustries.length > 0 && (
            <div style={{ marginBottom: "0.5rem" }}>
              <div style={{ padding: "0.5rem 1.5rem", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-accent)", fontWeight: 700 }}>
                Industries ({filteredIndustries.length})
              </div>
              {filteredIndustries.map((i) => (
                <div
                  key={i.slug}
                  className="search-result-item"
                  onClick={() => handleSelect(`/industries/${i.slug}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Layers size={14} style={{ color: "var(--color-accent)" }} />
                    <span className="search-result-title">{i.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredInsights.length > 0 && (
            <div>
              <div style={{ padding: "0.5rem 1.5rem", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-accent)", fontWeight: 700 }}>
                Insights & Analysis ({filteredInsights.length})
              </div>
              {filteredInsights.map((a) => (
                <div
                  key={a.slug}
                  className="search-result-item"
                  onClick={() => handleSelect(`/insights/${a.slug}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FileText size={14} style={{ color: "var(--color-accent)" }} />
                    <span className="search-result-title">{a.title}</span>
                  </div>
                  <span className="search-result-cat">{a.category} • {a.readTime}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
