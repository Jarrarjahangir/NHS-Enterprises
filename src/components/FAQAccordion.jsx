import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className="faq-list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{item.q}</span>
              <div className="faq-icon" aria-hidden="true">
                <Plus size={16} />
              </div>
            </button>

            {isOpen && (
              <div id={`faq-answer-${idx}`} className="faq-content">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
