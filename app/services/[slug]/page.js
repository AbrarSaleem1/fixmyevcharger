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
    title: `${service.title} | FixMyEV Charger`,
    description: `${service.shortDesc} Fast same-day service. Call (877) 596-2182!`,
    alternates: { canonical: `https://evchargerrepair.us/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} | FixMyEV Charger`,
      description: service.shortDesc,
      url: `https://evchargerrepair.us/services/${service.slug}/`,
    },
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
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

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
            <div className="hero-eyebrow"><i className="ph-fill ph-lightning"></i><span>Professional EV Charger Repair</span></div>
            <h1>Professional <span className="highlight">{service.name}</span></h1>
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
              <img src="/images/ev/hero_ev.jpg" alt={service.imageAlt} width={900} height={650} loading="eager" decoding="async" className="hero-main-img" />
              <div className="hero-same-day-badge"><i className="ph-fill ph-lightning"></i><span>Same Day Service</span></div>
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
              <span className="badge"><i className="ph-fill ph-check-circle"></i> Service Coverage</span>
              <h3 style={{ fontSize: "1.4rem", margin: "1rem 0" }}>What&apos;s Included</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {service.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.95rem" }}>
                    <i className="ph-bold ph-check" style={{ color: "var(--accent)", marginTop: "4px" }}></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "var(--surface)", padding: "2.5rem 2rem", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <span className="badge" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", borderColor: "rgba(245, 158, 11, 0.2)" }}>
                <i className="ph-fill ph-warning-diamond"></i> Warning Signs
              </span>
              <h3 style={{ fontSize: "1.4rem", margin: "1rem 0" }}>Common Symptoms</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {service.symptoms.map((symp, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.95rem" }}>
                    <i className="ph-bold ph-arrow-right" style={{ color: "#f59e0b", marginTop: "4px" }}></i>
                    <span>{symp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge"><i className="ph-fill ph-lightning"></i> More Solutions</span>
            <h2>Other EV Charger Repair Services</h2>
          </div>
          <div className="city-chips" style={{ marginTop: "2rem", maxHeight: "none", overflow: "visible" }}>
            {otherServices.map((s) => (
              <Link key={s.slug} className="city-chip" href={`/services/${s.slug}/`}>{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready For Fast, Professional EV Charger Service?</h2>
          <p>Certified electricians ready for same-day dispatch.</p>
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
