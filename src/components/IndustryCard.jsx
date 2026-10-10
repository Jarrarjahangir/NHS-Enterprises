import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function IndustryCard({ industry, index = 0 }) {
  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="industry-card"
      data-reveal="fade-up"
      style={{ "--stagger-i": index }}
      aria-label={`Explore our financial services for ${industry.name}`}
    >
      <img
        src={industry.image}
        alt={`Financial and accounting advisory for ${industry.name} in Dubai UAE`}
        className="industry-card-img"
        loading="lazy"
      />
      <div className="industry-card-overlay">
        <h3 className="industry-card-title">{industry.name}</h3>
        <span className="industry-card-link-text">
          <span>Sector Solutions</span>
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
