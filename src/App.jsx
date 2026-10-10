import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useScrollReveal } from "./hooks/useScrollReveal";

function ScrollRevealManager() {
  const location = useLocation();
  useScrollReveal("[data-reveal]", location.pathname);
  return null;
}

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceDetail from "./pages/ServiceDetail";
import IndustriesIndex from "./pages/IndustriesIndex";
import IndustryDetail from "./pages/IndustryDetail";
import InsightsIndex from "./pages/InsightsIndex";
import InsightDetail from "./pages/InsightDetail";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import Careers from "./pages/Careers";
import ClientPortal from "./pages/ClientPortal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import SitemapPage from "./pages/SitemapPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealManager />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<IndustriesIndex />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/insights" element={<InsightsIndex />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
