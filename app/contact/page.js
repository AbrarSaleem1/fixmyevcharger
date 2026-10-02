import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Contact Us | FixMyEV Charger 24/7 Dispatch",
  description: "Contact FixMyEV Charger for 24/7 emergency EV charger repair dispatch. Call (877) 596-2182 for immediate assistance nationwide.",
  alternates: { canonical: "https://fixmyevcharger.us/contact/" },
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />
      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}><i className="ph-fill ph-phone-call"></i> 24/7 Emergency Dispatch</span>
          <h1>Contact FixMyEV Charger</h1>
          <p>EV charger showing fault codes, tripping breakers, or completely offline? Call our 24/7 emergency hotline now for immediate dispatch.</p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ background: "var(--surface)", padding: "3.5rem 2.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)", textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--accent)", color: "#0b132b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1.5rem" }}>
              <i className="ph-fill ph-phone-call"></i>
            </div>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>24/7 Emergency Telephone Service</h2>
            <p style={{ color: "var(--text-light)", marginBottom: "2rem", fontSize: "1.05rem" }}>Our dispatch agents are available 24 hours a day, 7 days a week, 365 days a year.</p>
            <a href="tel:18775962182" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "1.3rem", padding: "1rem 2.5rem", borderRadius: "100px", boxShadow: "0 8px 24px rgba(0, 229, 153, 0.35)" }}>
              <i className="ph-fill ph-phone"></i><span>(877) 596-2182</span>
            </a>
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
              <div style={{ background: "rgba(255,255,255,.03)", padding: "1.25rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <strong style={{ display: "block", color: "#fff", marginBottom: "4px" }}>Hours of Operation:</strong>
                <span style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>Open 24 Hours / 7 Days a Week</span>
              </div>
              <div style={{ background: "rgba(255,255,255,.03)", padding: "1.25rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <strong style={{ display: "block", color: "#fff", marginBottom: "4px" }}>Service Coverage:</strong>
                <span style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>Nationwide across all 50 States</span>
              </div>
            </div>
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
