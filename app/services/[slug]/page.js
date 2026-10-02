import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "../../../lib/services";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found | FixMyEV Charger" };

  return {
    title: `${service.name} | FixMyEV Charger`,
    description: service.shortDesc,
    alternates: { canonical: `https://fixmyevcharger.us/services/${service.slug}/` },
    openGraph: {
      title: `${service.name} | FixMyEV Charger`,
      description: service.shortDesc,
      url: `https://fixmyevcharger.us/services/${service.slug}/`,
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: service.name, href: `/services/${service.slug}/` },
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
              <span>Available 24/7 for Same-Day Dispatch</span>
            </div>
            <div className="hero-eyebrow"><i className="ph-fill ph-lightning"></i><span>Certified EV Electrical Service</span></div>
            <h1>{service.name}</h1>
            <p className="hero-sub">{service.fullDesc}</p>
            <div className="hero-actions">
              <a href="tel:18775962182" className="hero-call-btn" id="hero-call-btn">
                <div className="hero-call-icon"><i className="ph-fill ph-phone-call"></i></div>
                <div className="hero-call-text"><span className="hero-call-label">Call 24/7 Service</span><span className="hero-call-number">(877) 596-2182</span></div>
              </a>
              <Link className="hero-secondary-btn" id="hero-services-btn" href="/services/"><span>All Services</span><i className="ph-bold ph-arrow-right"></i></Link>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card-frame">
              <img
                src={service.image}
                alt={service.imageAlt || service.name}
                width={900}
                height={650}
                loading="eager"
                decoding="async"
                className="hero-main-img"
              />
              <div className="hero-same-day-badge">
                <i className="ph-fill ph-lightning"></i>
                <span>Certified EV Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="container">
          <div className="feature-strip-grid feature-strip-grid-2">
            <div className="feature-strip-item"><div className="feature-strip-num">24/7</div><div className="feature-strip-label">Emergency EV Charger Hotline</div></div>
            <div className="feature-strip-item"><div className="feature-strip-num">All Brands</div><div className="feature-strip-label">Tesla, ChargePoint, JuiceBox & More</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <div style={{ background: "var(--surface)", padding: "2.5rem 2rem", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <span className="badge"><i className="ph-fill ph-warning-circle"></i> Common Symptoms</span>
              <h2 style={{ fontSize: "1.5rem", marginTop: ".75rem", marginBottom: "1.25rem" }}>Signs You Need {service.name}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {service.symptoms.map((sym, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: ".75rem" }}>
                    <i className="ph-fill ph-check-circle" style={{ color: "var(--accent)", fontSize: "1.25rem", marginTop: ".15rem", flexShrink: 0 }}></i>
                    <span style={{ color: "var(--text-light)" }}>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "var(--surface)", padding: "2.5rem 2rem", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <span className="badge"><i className="ph-fill ph-wrench"></i> What We Do</span>
              <h2 style={{ fontSize: "1.5rem", marginTop: ".75rem", marginBottom: "1.25rem" }}>Our Repair &amp; Diagnostic Scope</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {service.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: ".75rem" }}>
                    <i className="ph-fill ph-check-circle" style={{ color: "var(--accent)", fontSize: "1.25rem", marginTop: ".15rem", flexShrink: 0 }}></i>
                    <span style={{ color: "var(--text-light)" }}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Immediate {service.name}?</h2>
          <p>Licensed EV electricians are available now. Same-day diagnostics and upfront flat-rate pricing.</p>
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
