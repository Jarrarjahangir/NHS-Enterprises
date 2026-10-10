import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConsultationCTA from "../components/ConsultationCTA";
import { insightsData } from "../data/insightsData";
import { servicesData } from "../data/servicesData";

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedServices = servicesData.filter((s) =>
    article.relatedServices?.includes(s.id)
  );

  return (
    <main id="main-content">
      {/* Article Header */}
      <section className="page-hero">
        <div className="container" data-reveal="fade-up" style={{ maxWidth: "900px" }}>
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Insights", path: "/insights" },
              { label: article.category, path: "/insights" },
              { label: article.title }
            ]}
          />

          <span className="eyebrow">{article.category} • REGULATORY & STRATEGIC BRIEFING</span>
          <h1 className="page-hero-title">{article.title}</h1>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "var(--color-dark)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontWeight: 700 }}>
                NHS
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{article.author}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{article.authorRole}</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <Calendar size={14} /> {article.date}
              </span>
              <span>•</span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <div className="container" data-reveal="fade-up" style={{ maxWidth: "900px", marginTop: "2rem" }}>
        <div style={{ overflow: "hidden", aspectRatio: "16 / 9", border: "1px solid var(--color-border)" }}>
          <img
            src={article.featuredImage}
            alt={article.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" data-reveal="fade-up" style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-text-primary)" }}>
            {article.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h2 key={idx} style={{ marginTop: "2.5rem", marginBottom: "1rem", fontSize: "1.65rem" }}>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    style={{
                      margin: "2.5rem 0",
                      padding: "1.75rem 2rem",
                      backgroundColor: "var(--color-bg)",
                      borderLeft: "3px solid var(--color-accent)",
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      fontStyle: "italic",
                      lineHeight: 1.5,
                      color: "var(--color-text-primary)"
                    }}
                  >
                    "{block.text}"
                  </blockquote>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: "1.5rem", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--color-text-secondary)" }}>
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Related Advisory Practices Box */}
          {relatedServices.length > 0 && (
            <div style={{ marginTop: "3.5rem", padding: "2rem", backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
              <span className="eyebrow">RELEVANT PRACTICE AREAS</span>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                How NHS Implements These Strategies
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {relatedServices.map((srv) => (
                  <Link
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    className="link-arrow"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <span>{srv.title} Advisory & Implementation</span>
                    <ArrowRight size={14} className="icon-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/insights" className="link-arrow" style={{ gap: "0.5rem" }}>
              <ArrowLeft size={14} />
              <span>Back to All Insights</span>
            </Link>
            <Link to="/book-consultation" className="btn btn-primary">
              <span>Discuss With Author</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA />
    </main>
  );
}
