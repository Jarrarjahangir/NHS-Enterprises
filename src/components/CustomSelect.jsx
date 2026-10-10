import React, { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * CustomSelect — A luxury, accessible custom select dropdown for NHS Enterprises.
 * Eliminates native OS blue highlights in favor of a bespoke private-banking aesthetic.
 */
export default function CustomSelect({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option...",
  required = false,
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const listboxRef = useRef(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  // Normalize options to { value, label, subtext }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt, subtext: null };
    }
    return {
      value: opt.value,
      label: opt.label || opt.value,
      subtext: opt.subtext || null
    };
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOpen = () => {
    if (!isOpen) {
      const idx = normalizedOptions.findIndex((opt) => opt.value === value);
      setHighlightedIndex(idx >= 0 ? idx : 0);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  // Scroll highlighted option into view
  useEffect(() => {
    if (isOpen && listboxRef.current && highlightedIndex >= 0) {
      const optionEl = listboxRef.current.children[highlightedIndex];
      if (optionEl) {
        optionEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (optValue) => {
    if (onChange) {
      onChange({ target: { name, value: optValue } });
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        const idx = normalizedOptions.findIndex((opt) => opt.value === value);
        setHighlightedIndex(idx >= 0 ? idx : 0);
        setIsOpen(true);
      } else {
        setHighlightedIndex((prev) => (prev < normalizedOptions.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        const idx = normalizedOptions.findIndex((opt) => opt.value === value);
        setHighlightedIndex(idx >= 0 ? idx : 0);
        setIsOpen(true);
      } else {
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : normalizedOptions.length - 1));
      }
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < normalizedOptions.length) {
        handleSelect(normalizedOptions[highlightedIndex].value);
      } else {
        toggleOpen();
      }
    } else if (e.key === "Escape" || e.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div className={`custom-select-wrapper ${className}`} ref={containerRef}>
      {/* Hidden input for standard form submission */}
      <input type="hidden" name={name} value={value || ""} required={required} />

      <button
        type="button"
        id={selectId}
        className={`custom-select-trigger ${isOpen ? "is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? undefined : selectId}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        <span className={`custom-select-value ${!selectedOption ? "is-placeholder" : ""}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`custom-select-chevron ${isOpen ? "is-rotated" : ""}`} aria-hidden="true">
          <ChevronDown size={16} />
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listboxRef}
          className="custom-select-dropdown"
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`${selectId}-opt-${highlightedIndex}`}
        >
          {normalizedOptions.map((opt, idx) => {
            const isSelected = opt.value === value;
            const isHighlighted = idx === highlightedIndex;

            return (
              <li
                key={opt.value}
                id={`${selectId}-opt-${idx}`}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? "is-selected" : ""} ${
                  isHighlighted ? "is-highlighted" : ""
                }`}
                onClick={() => handleSelect(opt.value)}
                onMouseEnter={() => setHighlightedIndex(idx)}
              >
                <div className="custom-select-option-content">
                  <span className="custom-select-option-label">{opt.label}</span>
                  {opt.subtext && (
                    <span className="custom-select-option-subtext">{opt.subtext}</span>
                  )}
                </div>
                {isSelected && (
                  <span className="custom-select-option-check" aria-hidden="true">
                    <Check size={14} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
