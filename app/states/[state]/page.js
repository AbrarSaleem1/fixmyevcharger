import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import CityFilterList from "../../components/CityFilterList";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getState, getCitiesForState } from "../../../lib/locations";
import { SERVICES } from "../../../lib/services";

export async function generateMetadata({ params }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return { title: "Location Not Found | FixMyEV Charger" };
  return {
    title: `EV Charger Repair ${state.name} | Certified EV Electricians`,
    description: `Need EV charger repair in ${state.name}? 24/7 Tesla, Level 2 & commercial charger service across ${state.code}. Call (877) 596-2182!`,
    alternates: { canonical: `https://fixmyevcharger.us/states/${state.slug}/` },
    openGraph: {
      title: `EV Charger Repair ${state.name} | Certified EV Electricians`,
      description: `Need EV charger repair in ${state.name}? 24/7 Tesla, Level 2 & commercial charger service across ${state.code}. Call (877) 596-2182!`,
      url: `https://fixmyevcharger.us/states/${state.slug}/`,
    },
  };
}

export default async function StatePage({ params }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();

  const cities = getCitiesForState(stateSlug);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `${state.name} EV Charger Repair`, href: `/states/${state.slug}/` },
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
              <span>24/7 Priority EV Charger Repair Active</span>
            </div>
            <div className="hero-eyebrow"><i className="ph-fill ph-lightning"></i><span>Certified EV Charger Repair in {state.name}</span></div>
            <h1>Same Day EV Charger Repair in <span className="highlight">{state.name}</span><br />24/7 Emergency Service</h1>
            <p className="hero-sub">
              EV charger not working, tripping breakers, or showing fault codes? FixMyEV Charger provides certified electricians for same-day diagnostics, 24/7 emergency repairs, and upfront pricing across {state.name}.
            </p>
            <div className="hero-actions">
              <a href="tel:18775962182" className="hero-call-btn" id="hero-call-btn">
                <div className="hero-call-icon"><i className="ph-fill ph-phone-call"></i></div>
                <div className="hero-call-text"><span className="hero-call-label">Call 24/7 Service</span><span className="hero-call-number">(877) 596-2182</span></div>
              </a>
              <Link className="hero-secondary-btn" id="hero-services-btn" href="/services/"><span>View Services</span><i className="ph-bold ph-arrow-right"></i></Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-card-frame">
              <img src="/images/ev/hero_ev.jpg" alt={`EV charger repair service in ${state.name}`} width={900} height={650} loading="eager" decoding="async" className="hero-main-img" />
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

      <section className="section" id="cities" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge"><i className="ph-fill ph-map-pin"></i> Coverage Area</span>
            <h2>EV Charger Repair Services Across {state.name}</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              FixMyEV Charger provides reliable EV charger repair and electrical diagnostics throughout {state.name}. Select your city below.
            </p>
          </div>
          <CityFilterList cities={cities} stateSlug={state.slug} stateName={state.name} />
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="text-center">
            <span className="badge"><i className="ph-fill ph-lightning"></i> What We Do</span>
            <h2>Complete EV Charging Services in {state.name}</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-image">
                  <img
                    src={srv.image}
                    alt={`${srv.name} in ${state.name}`}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
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
          <h2>EV Charger Repair in {state.name} — 24/7</h2>
          <p>Emergency charger failures, breaker trips, or fault codes? Our certified electricians across {state.name} are ready.</p>
          <div className="cta-actions">
            <a href="tel:18775962182" className="btn btn-primary" style={{ background: "#0b132b", color: "var(--accent)", fontWeight: 700, minHeight: 52, padding: "0 2rem", fontSize: "1.05rem" }}>
              <i className="ph-fill ph-phone-call"></i> Call 24/7: (877) 596-2182
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
