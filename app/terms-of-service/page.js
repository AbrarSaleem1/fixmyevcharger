import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | FixMyEV Charger",
  description: "Terms of Service for FixMyEV Charger EV charger repair dispatch and service network.",
  alternates: { canonical: "https://fixmyevcharger.us/terms-of-service/" },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Terms of Service", href: "/terms-of-service/" }];
  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />
      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}><i className="ph-fill ph-file-text"></i> Legal Agreement</span>
          <h1>Terms of Service</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: 1.8, fontSize: "1.02rem" }}>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>1. Referral &amp; Dispatch Service</h2><p style={{ color: "var(--text-light)" }}>FixMyEV Charger operates as a nationwide EV charger repair referral and dispatch service. We connect consumers with independent certified electricians. Independent contractors provide their own licensing, insurance, and warranties.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>2. Upfront Estimates &amp; Authorizations</h2><p style={{ color: "var(--text-light)" }}>All pricing quotes are established between the property owner and the electrician. Work begins only after written approval.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>3. Limitation of Liability</h2><p style={{ color: "var(--text-light)" }}>FixMyEV Charger shall not be liable for indirect, incidental, or consequential damages from work performed by third-party electricians. Each contractor maintains commercial general liability coverage.</p></section>
            <section><h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>4. Modifications to Terms</h2><p style={{ color: "var(--text-light)" }}>We reserve the right to modify these terms at any time. Continued use constitutes agreement to updated terms.</p></section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
