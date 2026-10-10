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

  const stats = [
    { number: "500+", label: "Businesses Supported*" },
    { number: "98%", label: "Client Retention*" },
    { number: "15+", label: "Years of Combined Experience*" },
    { number: "10+", label: "Industries Served in UAE" }
  ];

  return (
    <main id="main-content">
      {/* 8. CINEMATIC HERO SECTION */}
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-eyebrow-wrap">
                <span className="eyebrow hero-eyebrow-reveal">
                  <span className="eyebrow-dot" />
                  ACCOUNTING & TAX CONSULTANCY IN THE UAE
                </span>
              </div>

              <h1 className="hero-title hero-title-reveal">
                Financial Expertise for a Stronger Tomorrow
              </h1>

              <p className="hero-description text-lead hero-description-reveal">
                NHS Enterprises provides professional accounting, tax, audit and financial advisory services to help businesses stay compliant, make informed decisions and achieve sustainable growth in the UAE and beyond.
              </p>

              <div className="hero-actions hero-actions-reveal">
                <Link to="/book-consultation" className="btn btn-primary" id="hero-cta-btn">
                  <span>Book a Consultation</span>
                  <ArrowRight size={14} className="icon-arrow" />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  <span>Explore Our Firm</span>
                </Link>
              </div>
            </div>

            {/* Right Editorial Visual with Layered Motion */}
            <div className="hero-visual hero-visual-reveal">
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero-boardroom.webp"
                  alt="Dubai Downtown skyline view from an executive boardroom"
                  className="hero-image"
                  fetchPriority="high"
                />
                <div className="hero-image-vignette" />
              </div>

              {/* Editorial Floating Badge */}
              <div className="hero-floating-card">
                <div className="hero-floating-status">
                  <span className="floating-pulse-dot" />
                  <span className="hero-floating-index">01 — Strategic Advisory</span>
                </div>
                <div className="hero-floating-text">
                  Strategic financial solutions for ambitious businesses.
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Scroll Cue Indicator */}
          <div className="hero-scroll-cue" aria-hidden="true">
            <span className="hero-scroll-cue-text">SCROLL TO EXPLORE</span>
            <div className="hero-scroll-cue-track">
              <div className="hero-scroll-cue-thumb" />
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
            {featuredServices.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. ABOUT SECTION */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="about-split-grid">
            {/* Left Copy */}
            <div data-reveal="fade-up">
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
            <div className="about-split-media" data-reveal="fade-up">
              <div className="about-photo-wrapper">
                <img
                  src="/images/about-office.webp"
                  alt="NHS Enterprises executive office in Dubai"
                  loading="lazy"
                />
                <div className="about-photo-accent-frame" />
              </div>

              <div className="about-vertical-stats">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="vertical-stat-item"
                    data-reveal="fade-up"
                    style={{
                      "--stagger-i": idx,
                      borderBottom: idx === stats.length - 1 ? "none" : undefined
                    }}
                  >
                    <div className="vertical-stat-number">{stat.number}</div>
                    <div className="vertical-stat-label">{stat.label}</div>
                  </div>
                ))}
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
            {featuredIndustries.map((ind, idx) => (
              <IndustryCard key={ind.slug} industry={ind} index={idx} />
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
            {featuredInsights.map((article, idx) => (
              <InsightCard key={article.slug} article={article} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 17. CONSULTATION CTA */}
      <ConsultationCTA />
    </main>
  );
}
