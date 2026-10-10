import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceCard from "../components/ServiceCard";
import ConsultationCTA from "../components/ConsultationCTA";
import { servicesData } from "../data/servicesData";

export default function ServicesIndex() {
  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Services" }]} />
          <span className="eyebrow">OUR EXPERTISE</span>
          <h1 className="page-hero-title">
            Comprehensive Financial Solutions for Your Business
          </h1>
          <p className="page-hero-desc text-lead">
            From daily transactional bookkeeping and statutory IFRS accounting to UAE Corporate Tax advisory and senior CFO leadership, our integrated practices ensure financial clarity and regulatory confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Delivery Model Banner */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">THE NHS ENGAGEMENT MODEL</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              How We Integrate With Your Leadership
            </h2>
            <p className="text-lead" style={{ marginBottom: "2.5rem" }}>
              Whether you need turnkey outsourcing of your entire finance department or specialized corporate tax restructuring, our senior partners design bespoke engagement models that scale seamlessly with your organizational growth.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
              <div style={{ backgroundColor: "#FFFFFF", padding: "1.75rem", border: "1px solid var(--color-border)" }}>
                <span className="editorial-num">01</span>
                <h3 style={{ fontSize: "1.2rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>Dedicated Pod Structure</h3>
                <p style={{ fontSize: "0.88rem" }}>Every client is assigned a dedicated team: a senior partner, a qualified chartered accountant, and a technical tax specialist.</p>
              </div>

              <div style={{ backgroundColor: "#FFFFFF", padding: "1.75rem", border: "1px solid var(--color-border)" }}>
                <span className="editorial-num">02</span>
                <h3 style={{ fontSize: "1.2rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>Cloud Financial Tech Stack</h3>
                <p style={{ fontSize: "0.88rem" }}>We implement secure, modern cloud architectures (Zoho, Xero, NetSuite) with encrypted document archiving and real-time dashboards.</p>
              </div>

              <div style={{ backgroundColor: "#FFFFFF", padding: "1.75rem", border: "1px solid var(--color-border)" }}>
                <span className="editorial-num">03</span>
                <h3 style={{ fontSize: "1.2rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>Continuous Advisory Cadence</h3>
                <p style={{ fontSize: "0.88rem" }}>Regular monthly and quarterly executive review meetings to review KPI variances, cash forecasts, and regulatory updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA />
    </main>
  );
}
