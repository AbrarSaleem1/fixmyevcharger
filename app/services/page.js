import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { SERVICES } from "../../lib/services";

export const metadata = {
  title: "Professional EV Charger Repair Services | FixMyEV Charger",
  description:
    "Explore our complete range of EV charger repair services: Tesla Wall Connector, Level 2, circuit & breaker repair, emergency service, DC fast charger, and commercial solutions. Call (877) 596-2182!",
  alternates: { canonical: "https://evchargerrepair.us/services/" },
  openGraph: {
    title: "Professional EV Charger Repair Services | FixMyEV Charger",
    description: "Explore our complete range of EV charger repair services. Certified electricians, same-day dispatch. Call (877) 596-2182!",
    url: "https://evchargerrepair.us/services/",
  }
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* ========== HERO ========== */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator"><span className="pulse-ping"></span><span className="pulse-core"></span></span>
              <span>24/7 Priority EV Charger Service Active</span>
            </div>
            <div className="hero-eyebrow">
              <i className="ph-fill ph-lightning"></i>
              <span>Professional EV Charging Solutions</span>
            </div>
            <h1>
              Complete <span className="highlight">EV Charger Repair</span>
              <br />&amp; Electrical Services
            </h1>
            <p className="hero-sub">
              From Tesla Wall Connector faults and Level 2 GFCI trips to electrical breaker replacements and commercial DC fast charger outages, our certified electricians arrive equipped to solve your EV charging problem on the first visit. Upfront pricing, fast dispatch, guaranteed results.
            </p>
            <div className="hero-actions">
              <a href="tel:18775962182" className="hero-call-btn" id="hero-call-btn">
                <div className="hero-call-icon">
                  <i className="ph-fill ph-phone-call"></i>
                </div>
                <div className="hero-call-text">
                  <span className="hero-call-label">Call 24/7 Service</span>
                  <span className="hero-call-number">(877) 596-2182</span>
                </div>
              </a>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card-frame">
              <img
                src="/images/ev/hero_ev.jpg"
                alt="Complete EV charger repair and electrical diagnostics"
                width={900}
                height={650}
                loading="eager"
                decoding="async"
                className="hero-main-img"
              />
              <div className="hero-same-day-badge">
                <i className="ph-fill ph-lightning"></i>
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURE STRIP ========== */}
      <section className="feature-strip">
        <div className="container">
          <div className="feature-strip-grid feature-strip-grid-2">
            <div className="feature-strip-item">
              <div className="feature-strip-num">24/7</div>
              <div className="feature-strip-label">Emergency EV Charger Repair Service</div>
            </div>
            <div className="feature-strip-item">
              <div className="feature-strip-num">All Makes</div>
              <div className="feature-strip-label">Tesla, Level 2, DC Fast & Commercial</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID WITH IMAGES ========== */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-lightning"></i> What We Do
            </span>
            <h2>Our Specialized EV Charger Repair Solutions</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              Explore our comprehensive range of residential, commercial, and emergency EV charging services below.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-image">
                  <img
                    src={srv.image}
                    alt={srv.imageAlt || `${srv.name} by FixMyEV Charger`}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="service-card-content">
                  <div className="service-icon">
                    <i className={`ph-fill ${srv.icon}`}></i>
                  </div>
                  <h3>{srv.name}</h3>
                  <p>{srv.shortDesc}</p>
                  <Link className="learn-more" href={`/services/${srv.slug}/`}>
                    <span>Learn More</span>
                    <i className="ph-bold ph-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-list-numbers"></i> Our Process
            </span>
            <h2>From Your Call to Fully Charged in 4 Steps</h2>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            {[
              {
                num: "1",
                title: "Call 24/7 Service Hotline",
                desc: "Dial (877) 596-2182 anytime. Our EV technical dispatch team answers around the clock with zero hold time.",
              },
              {
                num: "2",
                title: "Electrician Arrives Promptly",
                desc: "A licensed EV electrician arrives equipped with diagnostic meters, load testing tools, and replacement components.",
              },
              {
                num: "3",
                title: "Comprehensive Diagnosis & Quote",
                desc: "Your technician tests breaker voltage, ground fault integrity, and communication protocols, then provides an upfront flat-rate quote.",
              },
              {
                num: "4",
                title: "Same-Day Professional Repair",
                desc: "Repairs are completed immediately to NEC code standards. We verify full charging rate with your vehicle before wrapping up.",
              },
            ].map((step) => (
              <div className="step-item" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Immediate EV Charger Service?</h2>
          <p>Certified electricians standing by 24/7 for same-day dispatch nationwide.</p>
          <div className="cta-actions">
            <a href="tel:18775962182" className="btn btn-primary" style={{ background: "#0b132b", color: "var(--accent)", fontWeight: 700, minHeight: 52, padding: "0 2rem", fontSize: "1.05rem" }}>
              <i className="ph-fill ph-phone-call"></i> Call Now: (877) 596-2182
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
