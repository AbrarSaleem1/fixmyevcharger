import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | FixMyEV Charger",
  description: "Privacy Policy for FixMyEV Charger. Learn how we handle information responsibly.",
  alternates: { canonical: "https://fixmyevcharger.us/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy/" }];
  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />
      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}><i className="ph-fill ph-shield-check"></i> Legal Information</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: 1.8, fontSize: "1.02rem" }}>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>1. Information We Collect</h2><p style={{ color: "var(--text-light)" }}>When you contact FixMyEV Charger by telephone, we collect information necessary to coordinate your EV charger repair service, including your name, service address, telephone number, and the nature of your charging problem.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>2. How We Use Your Information</h2><p style={{ color: "var(--text-light)" }}>We use the information you provide solely to connect you with a certified electrician in your area, facilitate dispatch, and ensure high-quality service delivery.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>3. Data Protection &amp; Sharing</h2><p style={{ color: "var(--text-light)" }}>We do not sell, rent, or trade your personal information to third parties for marketing. Your contact information is shared only with the assigned electrician to fulfill your requested repair.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>4. Telephone Call Recording</h2><p style={{ color: "var(--text-light)" }}>Calls to our phone numbers may be recorded or monitored for quality assurance, safety, and training purposes.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>5. Contact Information</h2><p style={{ color: "var(--text-light)" }}>Questions about this Privacy Policy? Call us at (877) 596-2182.</p></section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
