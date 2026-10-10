import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import FAQAccordion from "../components/FAQAccordion";
import ConsultationCTA from "../components/ConsultationCTA";
import InsightCard from "../components/InsightCard";
import { servicesData } from "../data/servicesData";
import { industriesData } from "../data/industriesData";
import { insightsData } from "../data/insightsData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Filter related insights
  const relatedArticles = insightsData.filter((a) =>
    a.relatedServices?.includes(service.id)
  );

  return (
    <main id="main-content">
      {/* 1. Hero & Breadcrumbs */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: service.title }
            ]}
          />
          <span className="eyebrow">OUR PRACTICE AREAS</span>
          <h1 className="page-hero-title">{service.title}</h1>
          <p className="page-hero-desc text-lead">{service.overview}</p>
          
          <div style={{ marginTop: "2rem" }}>
            <Link to="/book-consultation" className="btn btn-primary">
              <span>Request a Service Consultation</span>
              <ArrowRight size={14} className="icon-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Challenge & NHS Solution (Split) */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="about-split-grid">
            {/* The Business Challenge */}
            <div style={{ backgroundColor: "var(--color-bg)", padding: "2.5rem", border: "1px solid var(--color-border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#B33927", marginBottom: "1rem" }}>
                <AlertCircle size={20} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  The Challenge
                </span>
              </div>
              <h3 style={{ marginBottom: "1rem" }}>The Operational Hurdle</h3>
              <p>{service.challenge}</p>
            </div>

            {/* How NHS Solves It */}
            <div style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF", padding: "2.5rem", border: "1px solid var(--color-dark-border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-accent)", marginBottom: "1rem" }}>
                <CheckCircle2 size={20} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  The NHS Approach
                </span>
              </div>
              <h3 style={{ color: "#FFFFFF", marginBottom: "1rem" }}>How We Deliver Resolution</h3>
              <p style={{ color: "var(--color-text-inverted-muted)" }}>{service.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Capabilities */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">OUR CAPABILITIES</span>
              <h2 className="section-header-title">Technical Scope & Deliverables</h2>
            </div>
            <div className="section-header-aside">
              <p className="section-header-desc">
                Institutional-grade methodologies compliant with UAE commercial laws and international standards.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--color-border)",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem"
                }}
              >
                <div style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
                    {cap}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Benefits */}
      <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">MEASURABLE VALUE</span>
              <h2 className="section-header-title">Strategic Benefits to Your Enterprise</h2>
            </div>
          </div>

          <div className="why-nhs-grid">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="why-nhs-card">
                <span className="editorial-num">0{idx + 1}</span>
                <h3 className="why-card-title" style={{ marginTop: "0.5rem" }}>{b.title}</h3>
                <p className="why-card-text">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Execution */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">ENGAGEMENT LIFECYCLE</span>
              <h2 className="section-header-title">How We Implement This Service</h2>
            </div>
          </div>

          <div className="process-grid">
            {service.process.map((p, idx) => (
              <div key={idx} className="process-card">
                <div className="process-step-header">
                  <span className="process-step-num">{p.step}</span>
                  <span className="process-step-dot" />
                </div>
                <h3 className="process-step-title">{p.name}</h3>
                <p className="process-step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Relevant Industries */}
      <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">SECTOR APPLICATION</span>
              <h2 className="section-header-title">Industries Commonly Utilizing This Service</h2>
            </div>
            <div className="section-header-aside">
              <Link to="/industries" className="link-arrow">
                <span>View All Industries</span>
                <ArrowRight size={14} className="icon-arrow" />
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {industriesData.slice(0, 7).map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                style={{
                  padding: "0.65rem 1.25rem",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <span>{ind.name}</span>
                <ArrowRight size={12} style={{ color: "var(--color-accent)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Common Queries About {service.title}</h2>
          </div>

          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* 8. Related Insights */}
      {relatedArticles.length > 0 && (
        <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container">
            <div className="section-header-row">
              <div className="section-header-content">
                <span className="eyebrow">THOUGHT LEADERSHIP</span>
                <h2 className="section-header-title">Related Insights & Analysis</h2>
              </div>
            </div>

            <div className="insights-grid">
              {relatedArticles.map((article) => (
                <InsightCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Final CTA */}
      <ConsultationCTA />
    </main>
  );
}
