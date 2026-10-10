import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import InsightCard from "../components/InsightCard";
import ConsultationCTA from "../components/ConsultationCTA";
import { insightsData } from "../data/insightsData";

export default function InsightsIndex() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Tax",
    "CFO Advisory",
    "Audit",
    "UAE Regulations",
    "Financial Strategy"
  ];

  const filteredArticles =
    activeCategory === "All"
      ? insightsData
      : insightsData.filter((a) => a.category === activeCategory);

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Insights" }]} />
          <span className="eyebrow">RESEARCH & THOUGHT LEADERSHIP</span>
          <h1 className="page-hero-title">
            Latest Insights & Updates
          </h1>
          <p className="page-hero-desc text-lead">
            Authoritative analysis on UAE Federal Corporate Tax, IFRS developments, cash flow engineering, and statutory governance designed for business owners and CFOs.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="section-tight" style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-muted)", marginRight: "0.5rem" }}>
              Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  backgroundColor: activeCategory === cat ? "var(--color-dark)" : "var(--color-bg)",
                  color: activeCategory === cat ? "#FFFFFF" : "var(--color-text-primary)",
                  border: "1px solid var(--color-border)",
                  transition: "all var(--transition-fast)"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="insights-grid">
            {filteredArticles.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div style={{ padding: "4rem 2rem", textAlign: "center", backgroundColor: "#FFFFFF", border: "1px solid var(--color-border)" }}>
              <p>No articles currently published under {activeCategory}. Check back soon for our latest white papers.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA />
    </main>
  );
}
