import React, { useRef } from "react";

const TURNOVER_TIERS = [
  {
    value: "Startup (< AED 3M)",
    shortLabel: "< AED 3M",
    title: "Startup / Pre-revenue",
    range: "< AED 3,000,000",
    desc: "Foundational bookkeeping, bank setup & initial VAT registration"
  },
  {
    value: "AED 3M – 15M (Growth)",
    shortLabel: "AED 3M – 15M",
    title: "Emerging Enterprise",
    range: "AED 3,000,000 – 15,000,000",
    desc: "UAE Corporate Tax provisioning, periodic closes & working capital review"
  },
  {
    value: "AED 15M – 50M (Mid-Market)",
    shortLabel: "AED 15M – 50M",
    title: "Mid-Market Enterprise",
    range: "AED 15,000,000 – 50,000,000",
    desc: "Statutory audit readiness, fractional CFO leadership & multi-currency controls"
  },
  {
    value: "AED 50M+ (Corporate / Group)",
    shortLabel: "AED 50M+",
    title: "Corporate / Holding Group",
    range: "AED 50,000,000+",
    desc: "IFRS group consolidation, transfer pricing files & board-level advisory"
  }
];

export default function TurnoverRangeSlider({
  name = "companySize",
  value = "AED 3M – 15M (Growth)",
  onChange,
  id = "turnover-range-slider"
}) {
  const sliderRef = useRef(null);

  const currentIndex = Math.max(
    0,
    TURNOVER_TIERS.findIndex((tier) => tier.value === value)
  );
  const activeTier = TURNOVER_TIERS[currentIndex] || TURNOVER_TIERS[1];
  const percentage = (currentIndex / (TURNOVER_TIERS.length - 1)) * 100;

  const handleIndexChange = (newIndex) => {
    const clampedIndex = Math.max(0, Math.min(TURNOVER_TIERS.length - 1, newIndex));
    if (onChange) {
      onChange({
        target: {
          name,
          value: TURNOVER_TIERS[clampedIndex].value
        }
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      handleIndexChange(currentIndex + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      handleIndexChange(currentIndex - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      handleIndexChange(0);
    } else if (e.key === "End") {
      e.preventDefault();
      handleIndexChange(TURNOVER_TIERS.length - 1);
    }
  };

  const handleTrackClick = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const closestIndex = Math.round(ratio * (TURNOVER_TIERS.length - 1));
    handleIndexChange(closestIndex);
  };

  return (
    <div className="turnover-slider-component">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={activeTier.value} />

      {/* Luxury Value Card / Header */}
      <div className="turnover-slider-header">
        <div className="turnover-slider-title-block">
          <span className="turnover-tier-eyebrow">Enterprise Revenue Tier</span>
          <h4 className="turnover-tier-name">{activeTier.title}</h4>
        </div>
        <div className="turnover-tier-badge">
          <span className="turnover-tier-currency">AED</span>
          <span className="turnover-tier-amount">{activeTier.shortLabel}</span>
        </div>
      </div>

      <p className="turnover-tier-desc">{activeTier.desc}</p>

      {/* Interactive Range Track & Thumb */}
      <div
        ref={sliderRef}
        className="turnover-track-wrapper"
        onClick={handleTrackClick}
        role="slider"
        id={id}
        tabIndex={0}
        aria-label="Annual Turnover / Enterprise Scale"
        aria-valuemin={0}
        aria-valuemax={TURNOVER_TIERS.length - 1}
        aria-valuenow={currentIndex}
        aria-valuetext={activeTier.value}
        onKeyDown={handleKeyDown}
      >
        {/* Background Track */}
        <div className="turnover-track-bg">
          {/* Active Highlight Track */}
          <div
            className="turnover-track-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Step Ticks */}
        <div className="turnover-ticks-row" aria-hidden="true">
          {TURNOVER_TIERS.map((tier, idx) => {
            const tickPercentage = (idx / (TURNOVER_TIERS.length - 1)) * 100;
            const isFilled = idx <= currentIndex;
            return (
              <span
                key={tier.value}
                className={`turnover-tick-dot ${isFilled ? "is-filled" : ""}`}
                style={{ left: `${tickPercentage}%` }}
              />
            );
          })}
        </div>

        {/* Polished Luxury Thumb */}
        <div
          className="turnover-slider-thumb"
          style={{ left: `${percentage}%` }}
          aria-hidden="true"
        >
          <div className="turnover-thumb-inner" />
        </div>
      </div>

      {/* Step Markers beneath slider */}
      <div className="turnover-labels-row" aria-hidden="true">
        {TURNOVER_TIERS.map((tier, idx) => (
          <button
            type="button"
            key={tier.value}
            className={`turnover-step-btn ${idx === currentIndex ? "is-active" : ""}`}
            onClick={() => handleIndexChange(idx)}
            tabIndex={-1}
          >
            {tier.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
