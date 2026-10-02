import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getState, formatCityName, isValidCity, getCitiesForState } from "../../../lib/locations";
import { SERVICES } from "../../../lib/services";

export async function generateMetadata({ params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  if (!state || !isValidCity(stateSlug, citySlug)) {
    return { title: "Location Not Found | FixMyEV Charger" };
  }
  const cityName = formatCityName(citySlug);
  return {
    title: `EV Charger Repair ${cityName}, ${state.code} | Certified EV Electricians`,
    description: `Need EV charger repair in ${cityName}, ${state.code}? 24/7 Tesla, Level 2 & commercial charger service by certified electricians. Call (877) 596-2182!`,
    alternates: {
      canonical: `https://evchargerrepair.us/${state.slug}/${citySlug}/`,
    },
    openGraph: {
      title: `EV Charger Repair ${cityName}, ${state.code} | Certified EV Electricians`,
      description: `Need EV charger repair in ${cityName}, ${state.code}? 24/7 Tesla, Level 2 & commercial charger service by certified electricians. Call (877) 596-2182!`,
      url: `https://evchargerrepair.us/${state.slug}/${citySlug}/`,
    },
  };
}

export default async function CityPage({ params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  if (!state || !isValidCity(stateSlug, citySlug)) {
    notFound();
  }
  const cityName = formatCityName(citySlug);
  const allCitiesInState = getCitiesForState(stateSlug);
  const nearbyCities = allCitiesInState
    .filter((c) => c.slug !== citySlug)
    .slice(0, 14);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `${state.name} EV Charger Repair`, href: `/states/${state.slug}/` },
    { label: `EV Charger Repair ${cityName}`, href: `/${state.slug}/${citySlug}/` },
  ];

  const cityFaqs = [
    {
      q: `Do you offer same-day EV charger repair in ${cityName}, ${state.code}?`,
      a: `Yes! We provide same-day emergency EV charger repair throughout ${cityName} and surrounding areas. Our certified electricians are on standby 24/7.`,
    },
    {
      q: `How quickly can an electrician reach my home in ${cityName}?`,
      a: `In most cases, a certified electrician can be at your door in ${cityName} within 45 to 90 minutes of your call.`,
    },
    {
      q: `What types of EV charger repairs do you handle in ${cityName}?`,
      a: `We repair all EV charger issues including Tesla Wall Connector faults, Level 2 GFCI trips, breaker failures, wiring issues, connector damage, and commercial DCFC outages.`,
    },
    {
      q: `Are your electricians licensed and insured in ${state.name}?`,
      a: `Yes, all electricians in our network are fully licensed, background-checked, insured, and equipped with specialized EV charging diagnostic tools.`,
    },
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "Electrician"],
    name: `FixMyEV Charger - ${cityName}, ${state.code}`,
    description: `Same day EV charger repair, Tesla Wall Connector service, and electrical diagnostics in ${cityName}, ${state.name}.`,
    url: `https://evchargerrepair.us/${state.slug}/${citySlug}/`,
    telephone: "+18775962182",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: state.code,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${cityName}, ${state.code}`,
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00", closes: "23:59",
    }],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator">
                <span className="pulse-ping"></span>
                <span className="pulse-core"></span>
              </span>
              <span>24/7 Priority EV Charger Repair Active</span>
            </div>
            <div className="hero-eyebrow">
              <i className="ph-fill ph-lightning"></i>
              <span>Certified EV Charger Repair in {cityName}, {state.code}</span>
            </div>
            <h1>
              Same Day EV Charger Repair in <span className="highlight">{cityName}, {state.code}</span>
            </h1>
            <p className="hero-sub">
              FixMyEV Charger provides EV owners in {cityName} with certified electricians who arrive equipped to diagnose Tesla Wall Connectors, Level 2 chargers, circuit issues, and commercial charging stations on the first visit. 24/7 emergency response, upfront pricing, guaranteed results.
            </p>
            <div className="hero-actions">
              <a href="tel:18775962182" className="hero-call-btn" id="hero-call-btn">
                <div className="hero-call-icon"><i className="ph-fill ph-phone-call"></i></div>
                <div className="hero-call-text">
                  <span className="hero-call-label">Call 24/7 Service</span>
                  <span className="hero-call-number">(877) 596-2182</span>
                </div>
              </a>
              <Link className="hero-secondary-btn" id="hero-services-btn" href="/services/">
                <span>View Services</span>
                <i className="ph-bold ph-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-card-frame">
              <img src="/images/ev/hero_ev.jpg" alt={`Professional EV charger repair service in ${cityName}, ${state.code}`} width={900} height={650} loading="eager" decoding="async" className="hero-main-img" />
              <div className="hero-same-day-badge"><i className="ph-fill ph-lightning"></i><span>Same Day Service</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="feature-strip">
        <div className="container">
          <div className="feature-strip-grid feature-strip-grid-2">
            <div className="feature-strip-item">
              <div className="feature-strip-num">24/7</div>
              <div className="feature-strip-label">Emergency EV Charger Service in {cityName}</div>
            </div>
            <div className="feature-strip-item">
              <div className="feature-strip-num">All Brands</div>
              <div className="feature-strip-label">Tesla, ChargePoint, JuiceBox & More</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="section local-intro" id="local-info" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="local-intro-grid">
            <div>
              <span className="badge"><i className="ph-fill ph-map-pin"></i> Serving {cityName}</span>
              <h2 style={{ marginTop: "1rem" }}>EV Charger Repair &amp; Electrical Services in {cityName}, {state.code}</h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginTop: "1rem" }}>
                When your EV charger malfunctions in {cityName}, having certified, fast-responding electricians is essential. FixMyEV Charger provides professional EV charger diagnostics, emergency electrical service, and charging station repair across {cityName} and surrounding {state.name} communities.
              </p>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginTop: ".5rem", fontSize: ".97rem" }}>
                Our certified electricians arrive equipped with diagnostic tools for Tesla Wall Connectors, Level 2 EVSE units, circuit breaker analysis, and commercial charging stations. Whether dealing with a fault code at midnight or a tripped breaker during the day, we solve the problem safely.
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <a href="tel:18775962182" className="btn btn-primary" style={{ minHeight: 48, padding: "0 1.75rem" }}>
                  <i className="ph-fill ph-phone-call"></i> Call Now: (877) 596-2182
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge"><i className="ph-fill ph-lightning"></i> What We Do</span>
            <h2>Complete EV Charging Services in {cityName}</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-image">
                  <img
                    src={srv.image}
                    alt={`${srv.name} in ${cityName}, ${stateName}`}
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
                  <Link className="learn-more" href={`/services/${srv.slug}/`}>
                    <span>Learn More</span> <i className="ph-bold ph-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-section" id="why-us">
        <div className="container">
          <div className="text-center">
            <span className="badge"><i className="ph-fill ph-shield-check"></i> Why Choose Us</span>
            <h2>Why {cityName} EV Owners Choose FixMyEV Charger</h2>
          </div>
          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              { icon: "ph-fill ph-clock-afternoon", title: "24/7 Emergency Service", desc: `EV charger emergencies in ${cityName} are handled 24/7, 365 days a year by our certified electricians.` },
              { icon: "ph-fill ph-tag", title: "Upfront Written Pricing", desc: "Complete diagnostic report and flat-rate quote before any work begins. Zero hidden fees." },
              { icon: "ph-fill ph-graduation-cap", title: "All EV Charger Brands", desc: "Tesla, ChargePoint, JuiceBox, Grizzl-E, Wallbox, ClipperCreek, Blink, ABB, and Tritium." },
              { icon: "ph-fill ph-shield-check", title: "Guaranteed Safe Charging", desc: "Every repair concludes with electrical testing, live vehicle charge verification, and satisfaction guarantee." },
              { icon: "ph-fill ph-truck", title: "Fully Equipped Vehicles", desc: "Service vehicles carry common EVSE components for fast, single-visit repairs." },
              { icon: "ph-fill ph-star-four", title: "Licensed Electricians", desc: `Licensed, certified electricians who know ${state.name} electrical codes inside and out.` },
            ].map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-icon-box"><i className={item.icon}></i></div>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY CITIES */}
      {nearbyCities.length > 0 && (
        <section className="section nearby-section" style={{ background: "var(--white)" }}>
          <div className="container">
            <div className="text-center">
              <span className="badge"><i className="ph-fill ph-map-pin"></i> Coverage Area</span>
              <h2>EV Charger Repair Near {cityName}</h2>
            </div>
            <div className="city-chips" style={{ marginTop: "2rem" }}>
              {nearbyCities.map((c) => (
                <Link key={c.slug} className="city-chip" href={`/${state.slug}/${c.slug}/`}>{c.name}</Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link href={`/states/${state.slug}/`} style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
                View all cities in {state.name} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="badge badge-outline"><i className="ph-fill ph-question"></i> FAQ</span>
            <h2 style={{ color: "#fff" }}>Frequently Asked Questions in {cityName}, {state.code}</h2>
          </div>
          <div className="faq-list">
            {cityFaqs.map((faq, i) => (
              <details className="faq-item" key={i} open={i === 0 || undefined}>
                <summary className="faq-question">
                  <span>{faq.q}</span>
                  <div className="faq-icon"><i className="ph-bold ph-plus"></i></div>
                </summary>
                <div className="faq-answer" style={{ maxHeight: "none" }}><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Emergency EV Charger Repair in {cityName}?</h2>
          <p>Certified electricians standing by 24 hours a day, 7 days a week.</p>
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
