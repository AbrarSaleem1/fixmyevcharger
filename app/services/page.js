import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { SERVICES } from "../../lib/services";

export const metadata = {
  title: "Professional EV Charger Repair Services | FixMyEV Charger",
  description: "Explore our EV charger repair services: Tesla Wall Connector, Level 2, circuit & breaker, emergency, DC fast charger, and commercial repair. Call (877) 596-2182!",
  alternates: { canonical: "https://evchargerrepair.us/services/" },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator"><span className="pulse-ping"></span><span className="pulse-core"></span></span>
              <span>24/7 Priority EV Charger Service Active</span>
            </div>
            <div className="hero-eyebrow"><i className="ph-fill ph-lightning"></i><span>Professional EV Charging Solutions</span></div>
            <h1>Complete <span className="highlight">EV Charger Repair</span><br />&amp; Electrical Services</h1>
            <p className="hero-sub">From Tesla Wall Connector faults and Level 2 GFCI trips to commercial DC fast charger outages, our certified electricians arrive equipped to solve your EV charging problem on the first visit.</p>
            <div className="hero-actions">
              <a href="tel:18775962182" className="hero-call-btn" id="hero-call-btn">
                <div className="hero-call-icon"><i className="ph-fill ph-phone-call"></i></div>
                <div className="hero-call-text"><span className="hero-call-label">Call 24/7 Service</span><span className="hero-call-number">(877) 596-2182</span></div>
              </a>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-card-frame">
              <img src="/images/ev/hero_ev.jpg" alt="Complete EV charger repair and electrical services" width={900} height={650} loading="eager" decoding="async" className="hero-main-img" />
              <div className="hero-same-day-badge"><i className="ph-fill ph-lightning"></i><span>Same Day Service</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="container">
          <div className="feature-strip-grid feature-strip-grid-2">
            <div className="feature-strip-item"><div className="feature-strip-num">24/7</div><div className="feature-strip-label">Emergency EV Charger Repair</div></div>
            <div className="feature-strip-item"><div className="feature-strip-num">All Brands</div><div className="feature-strip-label">Tesla, ChargePoint, JuiceBox & More</div></div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge"><i className="ph-fill ph-lightning"></i> What We Do</span>
            <h2>Our Specialized EV Charger Repair Solutions</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-content">
                  <div className="service-icon"><i className={`ph-fill ${srv.icon}`}></i></div>
                  <h3>{srv.name}</h3>
                  <p>{srv.shortDesc}</p>
                  <Link className="learn-more" href={`/services/${srv.slug}/`}><span>Learn More</span><i className="ph-bold ph-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Immediate EV Charger Service?</h2>
          <p>Certified electricians standing by 24/7 for same-day dispatch.</p>
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
