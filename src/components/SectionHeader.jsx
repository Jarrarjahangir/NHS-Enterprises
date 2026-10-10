import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  linkText,
  linkUrl,
  dark = false,
  align = "space-between"
}) {
  return (
    <div className="section-header-row" style={align === "center" ? { flexDirection: "column", alignItems: "center", textAlign: "center" } : {}}>
      <div className="section-header-content" style={align === "center" ? { maxWidth: "800px" } : {}}>
        {eyebrow && (
          <span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
            {eyebrow}
          </span>
        )}
        <h2 className="section-header-title" style={dark ? { color: "#FFFFFF" } : {}}>
          {title}
        </h2>
      </div>

      {(description || (linkText && linkUrl)) && (
        <div className="section-header-aside" style={align === "center" ? { alignItems: "center" } : {}}>
          {description && (
            <p className="section-header-desc" style={dark ? { color: "var(--color-text-inverted-muted)" } : {}}>
              {description}
            </p>
          )}
          {linkText && linkUrl && (
            <Link
              to={linkUrl}
              className={`link-arrow ${dark ? "btn-outline-dark" : ""}`}
              style={dark ? { padding: "0.5rem 1rem", fontSize: "0.8rem" } : {}}
            >
              <span>{linkText}</span>
              <ArrowRight size={14} className="icon-arrow" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
