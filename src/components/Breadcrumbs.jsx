import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  // items: [{ label: "Home", path: "/" }, { label: "Services", path: "/services" }, { label: "Accounting" }]
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronRight size={12} className="breadcrumb-separator" />}
            {isLast || !item.path ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
