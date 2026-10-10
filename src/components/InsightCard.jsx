import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function InsightCard({ article, index = 0 }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className="insight-card"
      data-reveal="fade-up"
      style={{ "--stagger-i": index }}
      aria-label={`Read article: ${article.title}`}
    >
      <div className="insight-card-media">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="insight-card-img"
          loading="lazy"
        />
      </div>

      <div className="insight-card-body">
        <span className="insight-category-badge">{article.category}</span>
        <h3 className="insight-card-title">{article.title}</h3>
        <p className="insight-card-excerpt">{article.excerpt}</p>

        <div className="insight-card-meta">
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Calendar size={13} /> {article.date}
            </span>
            <span>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Clock size={13} /> {article.readTime}
            </span>
          </div>

          <div style={{ color: "var(--color-accent)" }}>
            <ArrowRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
}
