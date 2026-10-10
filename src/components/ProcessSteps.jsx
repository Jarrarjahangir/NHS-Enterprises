import React from "react";
import SectionHeader from "./SectionHeader";

export default function ProcessSteps() {
  const steps = [
    {
      num: "01",
      name: "Understand",
      desc: "We learn about your business, operations, compliance history, and strategic objectives."
    },
    {
      num: "02",
      name: "Plan",
      desc: "We develop a tailored accounting, tax, or advisory strategy aligned with your regulatory obligations."
    },
    {
      num: "03",
      name: "Implement",
      desc: "We execute with precision, establishing clear reporting workflows and maintaining close collaboration."
    },
    {
      num: "04",
      name: "Support",
      desc: "We provide ongoing financial advice and governance to ensure continuous compliance and long-term success."
    }
  ];

  return (
    <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="container">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="A Clear and Collaborative Approach"
          description="We follow a structured yet flexible process to ensure we understand your goals, deliver practical solutions and support you through execution."
        />

        <div className="process-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="process-card">
              <div className="process-step-header">
                <span className="process-step-num">{s.num}</span>
                <span className="process-step-dot" />
              </div>
              <h3 className="process-step-title">{s.name}</h3>
              <p className="process-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
