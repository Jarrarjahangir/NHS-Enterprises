import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import MetricsBar from "../components/MetricsBar";
import ServiceCard from "../components/ServiceCard";
import IndustryCard from "../components/IndustryCard";
import InsightCard from "../components/InsightCard";
import WhyNHS from "../components/WhyNHS";
import ProcessSteps from "../components/ProcessSteps";
import TestimonialsSection from "../components/TestimonialsSection";
import ConsultationCTA from "../components/ConsultationCTA";
import { servicesData } from "../data/servicesData";
import { industriesData } from "../data/industriesData";
import { insightsData } from "../data/insightsData";

export default function Home() {
  const featuredServices = servicesData.slice(0, 6);
  const featuredIndustries = industriesData.slice(0, 6);
  const featuredInsights = insightsData.slice(0, 3);

  return (
    <main id="main-content">
      {/* 8. HERO SECTION */}
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <span className="eyebrow">
                ACCOUNTING & TAX CONSULTANCY IN THE UAE
              </span>

              <h1 className="hero-title">
                Financial Expertise for a Stronger Tomorrow
              </h1>

              <p className="hero-description text-lead">
                NHS Enterprises provides professional accounting, tax, audit and financial advisory services to help businesses stay compliant, make informed decisions and achieve sustainable growth in the UAE and beyond.
              </p>

              <div className="hero-actions">
                <Link to="/book-consultation" className="btn btn-primary" id="hero-cta-btn">
                  <span>Book a Consultation</span>
                  <ArrowRight size={14} className="icon-arrow" />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  <span>Explore Our Firm</span>
                </Link>
              </div>
            </div>

            {/* Right Editorial Visual */}
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero-boardroom.webp"
                  alt="Dubai Downtown skyline view from an executive boardroom"
                  className="hero-image"
                  fetchPriority="high"
                />
              </div>

              {/* Editorial Floating Badge */}
              <div className="hero-floating-card">
                <div className="hero-floating-index">01 — Strategic Advisory</div>
                <div className="hero-floating-text">
                  Strategic financial solutions for ambitious businesses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRUST / CREDIBILITY AREA */}
      <MetricsBar />

      {/* 10. SERVICES SECTION */}
      <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Comprehensive Financial Solutions for Your Business"
            description="From daily bookkeeping to strategic financial advisory, our services are designed to support your business at every stage of its journey."
            linkText="View All Services"
            linkUrl="/services"
          />

          <div className="services-grid">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. ABOUT SECTION */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="about-split-grid">
            {/* Left Copy */}
            <div>
              <span className="eyebrow">ABOUT NHS ENTERPRISES</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                A Trusted Advisory Partner in Dubai
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                NHS Enterprises (NHS ENT Accounting & Tax Consultancy) is an established UAE firm operating from Port Saeed, Deira, Dubai. We combine rigorous international financial standards with deep local expertise to help businesses navigate UAE Corporate Tax, statutory audits, and strategic financial planning.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                Whether advising growing startups in free zones, established family conglomerates, or international corporations setting up UAE operations, our senior practitioners bring clarity to numbers and strategic discipline to decision-making.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link to="/about" className="btn btn-primary">
                  <span>Our Story</span>
                  <ArrowRight size={14} className="icon-arrow" />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* Right Media & Vertical Stats */}
            <div className="about-split-media">
              <div className="about-photo-wrapper">
                <img
                  src="/images/about-office.webp"
                  alt="NHS Enterprises executive office in Dubai"
                  loading="lazy"
                />
              </div>

              <div className="about-vertical-stats">
                <div className="vertical-stat-item">
                  <div className="vertical-stat-number">500+</div>
                  <div className="vertical-stat-label">Businesses Supported*</div>
                </div>

                <div className="vertical-stat-item">
                  <div className="vertical-stat-number">98%</div>
                  <div className="vertical-stat-label">Client Retention*</div>
                </div>

                <div className="vertical-stat-item">
                  <div className="vertical-stat-number">15+</div>
                  <div className="vertical-stat-label">Years of Combined Experience*</div>
                </div>

                <div className="vertical-stat-item" style={{ borderBottom: "none" }}>
                  <div className="vertical-stat-number">10+</div>
                  <div className="vertical-stat-label">Industries Served in UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. INDUSTRIES SECTION */}
      <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <SectionHeader
            eyebrow="INDUSTRIES WE SERVE"
            title="Sector Expertise That Drives Real Results"
            description="We work with a diverse range of industries, understanding the unique challenges and opportunities each sector presents in the UAE."
            linkText="View All Industries"
            linkUrl="/industries"
          />

          <div className="industries-grid">
            {featuredIndustries.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHY NHS DIFFERENTIATION */}
      <WhyNHS />

      {/* 14. PROCESS */}
      <ProcessSteps />

      {/* 15. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 16. INSIGHTS */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <SectionHeader
            eyebrow="INSIGHTS & UPDATES"
            title="Latest Insights & Updates"
            description="Stay informed with expert insights on UAE regulations, Corporate Tax, industry trends and business growth strategies."
            linkText="View All Insights"
            linkUrl="/insights"
          />

          <div className="insights-grid">
            {featuredInsights.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 17. CONSULTATION CTA */}
      <ConsultationCTA />
    </main>
  );
}
