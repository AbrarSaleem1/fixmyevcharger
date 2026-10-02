import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "About Us | FixMyEV Charger",
  description: "Learn about FixMyEV Charger — nationwide leaders in fast, certified EV charger repair, Tesla Wall Connector service, and emergency electrical solutions. Call (877) 596-2182!",
  alternates: { canonical: "https://fixmyevcharger.us/about/" },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />
      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}><i className="ph-fill ph-info"></i> About Our Company</span>
          <h1>About FixMyEV Charger</h1>
          <p>Your trusted nationwide partner for fast, certified, same-day EV charger repair and 24/7 emergency electrical dispatch.</p>
          <div className="page-header-dispatch">
            <span>24/7 Priority Emergency Line:</span>
            <a href="tel:18775962182"><i className="ph-fill ph-phone-call"></i> (877) 596-2182</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <span className="badge"><i className="ph-fill ph-target"></i> Our Mission</span>
              <h2 style={{ marginTop: "0.75rem" }}>Reliable EV Charging When You Need It Most</h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", marginTop: "1rem" }}>
                At FixMyEV Charger, our mission is simple: to eliminate the stress, delays, and surprise costs associated with EV charger malfunctions. A non-functional charger means a stranded vehicle, missed commutes, and potential electrical safety hazards.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", margin: "1rem 0" }}>
              <div className="why-card">
                <div className="why-icon-box"><i className="ph-fill ph-timer"></i></div>
                <div><h3>Same-Day Dispatch</h3><p>Our network of certified electricians arrives within rapid windows to solve EV charging problems fast.</p></div>
              </div>
              <div className="why-card">
                <div className="why-icon-box"><i className="ph-fill ph-tag"></i></div>
                <div><h3>Flat-Rate Pricing</h3><p>Clear, written estimates before work begins with zero hidden surcharges or surprise fees.</p></div>
              </div>
              <div className="why-card">
                <div className="why-icon-box"><i className="ph-fill ph-shield-check"></i></div>
                <div><h3>Guaranteed Work</h3><p>Every repair uses commercial-grade components and is backed by a satisfaction warranty.</p></div>
              </div>
            </div>

            <div>
              <span className="badge"><i className="ph-fill ph-lightning"></i> Specialized Focus</span>
              <h2 style={{ marginTop: "0.75rem" }}>Why We Specialize in EV Chargers</h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", marginTop: "1rem" }}>
                EV chargers are high-voltage precision devices that demand specialized electrical expertise. By concentrating on Tesla Wall Connectors, Level 2 EVSE units, circuit diagnostics, and commercial charging infrastructure, our electricians arrive with the exact tools and components required to complete 95% of repairs on the very first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Emergency EV Charger Service?</h2>
          <p>Certified electricians standing by 24/7.</p>
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
