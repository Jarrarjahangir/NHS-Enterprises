import React from "react";
import { Users, Award, Building2, Globe } from "lucide-react";

export default function MetricsBar() {
  const metrics = [
    {
      icon: <Users size={20} />,
      number: "500+",
      label: "Businesses Supported",
      isPlaceholder: true
    },
    {
      icon: <Award size={20} />,
      number: "98%",
      label: "Client Retention",
      isPlaceholder: true
    },
    {
      icon: <Building2 size={20} />,
      number: "15+",
      label: "Years of Combined Experience",
      isPlaceholder: true
    },
    {
      icon: <Globe size={20} />,
      number: "UAE",
      label: "Local Expertise, Global Perspective",
      isPlaceholder: false
    }
  ];

  return (
    <section className="metrics-bar" aria-label="Key Performance Indicators">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-item">
              <div className="metric-icon-wrap" aria-hidden="true">
                {m.icon}
              </div>
              <div>
                <div className="metric-number">{m.number}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="metrics-disclaimer">
          * Figures indicated represent firm capability targets & development benchmarks. Verified statutory audit disclosures available upon engagement.
        </p>
      </div>
    </section>
  );
}
