import React from "react";
import { Compass, Lightbulb, Sliders, Handshake } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function WhyNHS() {
  const pillars = [
    {
      icon: <Compass size={24} strokeWidth={1.5} />,
      title: "Local Expertise",
      desc: "Deep understanding of UAE regulations, Federal Tax Authority mandates, and freezone commercial frameworks."
    },
    {
      icon: <Lightbulb size={24} strokeWidth={1.5} />,
      title: "Proactive Approach",
      desc: "We identify tax exposure, cash flow risks, and strategic growth opportunities before they impact your balance sheet."
    },
    {
      icon: <Sliders size={24} strokeWidth={1.5} />,
      title: "Tailored Solutions",
      desc: "Financial strategies engineered around your exact industry dynamics, capital structure, and business model."
    },
    {
      icon: <Handshake size={24} strokeWidth={1.5} />,
      title: "Long-Term Partnership",
      desc: "Committed to your institutional success at every stage—from early foundation to regional enterprise expansion."
    }
  ];

  return (
    <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <SectionHeader
          eyebrow="WHY CHOOSE NHS"
          title="More Than Compliance. A Partner in Growth."
          description="We go beyond numbers to deliver meaningful advice, proactive solutions and long-term value for your business."
        />

        <div className="why-nhs-grid">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="why-nhs-card"
              data-reveal="fade-up"
              style={{ "--stagger-i": idx }}
            >
              <div className="why-icon-box" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3 className="why-card-title">{pillar.title}</h3>
              <p className="why-card-text">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
