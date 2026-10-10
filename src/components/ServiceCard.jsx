import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card" aria-label={`View details for ${service.title}`}>
      <div className="service-card-media">
        <img
          src={service.heroImage}
          alt={`NHS ${service.title} services in UAE`}
          className="service-card-img"
          loading="lazy"
        />
      </div>

      <div className="service-card-body">
        <h3 className="service-card-title">{service.shortTitle || service.title}</h3>
        <p className="service-card-desc">{service.tagline || service.shortDesc}</p>

        <div className="service-card-footer">
          <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
            Explore Service
          </span>
          <div className="service-card-arrow">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
