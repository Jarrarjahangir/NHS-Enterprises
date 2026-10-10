import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonialsData } from "../data/testimonialsData";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const total = testimonialsData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Touch swipe support for mobile
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header-row">
          <div className="section-header-content">
            <span className="eyebrow">CLIENT TESTIMONIALS</span>
            <h2 className="section-header-title">Trusted by Businesses Across the UAE</h2>
          </div>

          <div className="section-header-aside">
            <p className="section-header-desc">
              Strategic financial clarity, regulatory confidence, and long-term partnership.
            </p>
            {/* Luxury Navigation Buttons */}
            <div className="carousel-nav-controls" aria-label="Testimonial navigation">
              <button
                type="button"
                onClick={handlePrev}
                className="carousel-nav-btn"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="carousel-nav-btn"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Luxury Carousel Stage */}
        <div
          ref={containerRef}
          className="luxury-carousel-stage"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client Testimonials Carousel"
        >
          <div className="testimonial-featured-card" key={activeTestimonial.id}>
            <div className="testimonial-quote-icon">
              <Quote size={32} strokeWidth={1.5} />
            </div>

            <p className="testimonial-featured-text">
              “{activeTestimonial.quote}”
            </p>

            <div className="testimonial-meta-row">
              <div>
                <h4 className="testimonial-client-name">{activeTestimonial.clientName}</h4>
                <div className="testimonial-client-role">
                  {activeTestimonial.clientRole} • {activeTestimonial.companyCategory}
                </div>
                <div className="testimonial-client-location">
                  {activeTestimonial.location}
                </div>
              </div>

              {/* Progress Index Counter */}
              <div className="carousel-index-counter" aria-live="polite">
                <span className="current-num">0{currentIndex + 1}</span>
                <span className="divider">/</span>
                <span className="total-num">0{total}</span>
              </div>
            </div>
          </div>

          {/* Luxury Dot / Pill Indicators */}
          <div className="carousel-indicators-row" role="tablist" aria-label="Testimonial slides">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to testimonial ${idx + 1} by ${item.clientName}`}
                className={`carousel-dot-btn ${idx === currentIndex ? "is-active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
