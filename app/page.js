import Layout from "./components/Layout";
import Link from "next/link";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const metadata = {
  title: "EV Charger Repair & Electrical Services | FixMyEV Charger",
  description:
    "FixMyEV Charger provides 24/7 emergency EV charger repair, Tesla Wall Connector service & Level 2 diagnostics. Certified electricians. Call (877) 596-2182!",
  alternates: { canonical: "https://evchargerrepair.us/" },
  openGraph: {
    title: "EV Charger Repair & Electrical Services | FixMyEV Charger",
    description: "FixMyEV Charger provides 24/7 emergency EV charger repair, Tesla Wall Connector service & Level 2 diagnostics. Certified electricians. Call (877) 596-2182!",
    url: "https://evchargerrepair.us/",
  },
};

export default function HomePage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "Electrician"],
    name: "FixMyEV Charger",
    description: "24/7 emergency EV charger repair, Tesla Wall Connector service, Level 2 charger diagnostics, and commercial charging station maintenance.",
    url: "https://evchargerrepair.us/",
    telephone: "+18775962182",
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "United States" },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00", closes: "23:59"
    }]
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if my EV charger needs professional repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs include fault indicator lights (red/amber LEDs), the charger failing to initiate a charging session, tripping your circuit breaker, reduced charging speed, or error codes on the charger display. If your vehicle consistently fails to charge, professional EV charger diagnostics are essential."
        }
      },
      {
        "@type": "Question",
        name: "Why does my EV charger keep tripping the breaker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repeated breaker trips typically indicate an undersized circuit, loose wiring connections, a ground fault within the EVSE unit, or a deteriorating breaker. A licensed electrician should perform a load calculation and inspect the dedicated circuit to identify and resolve the root cause safely."
        }
      },
      {
        "@type": "Question",
        name: "Do you repair Tesla Wall Connectors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our certified electricians service Tesla Wall Connector Gen 2, Gen 3, and Universal models. We diagnose fault codes, Wi-Fi connectivity issues, internal relay failures, and thermal cutoff problems to restore full charging capability."
        }
      },
      {
        "@type": "Question",
        name: "What brands of EV chargers do you repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We repair all major EV charger brands including Tesla, ChargePoint, JuiceBox, Grizzl-E, Wallbox, ClipperCreek, Siemens, Blink, SemaConnect, ABB, and Tritium, covering Level 2 home chargers, workplace units, and DC fast charging stations."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide emergency EV charger repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, FixMyEV Charger provides 24/7 emergency EV charger repair for electrical hazards, sparking units, breaker failures, and critical charging station outages. Our licensed electricians respond immediately to prevent safety risks and restore charging."
        }
      }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* ========== HERO ========== */}
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
              <span>24/7 Emergency EV Charger Repair</span>
            </div>
            <h1>
              Fast 24/7 EV Charger <span className="highlight">Repair &amp; Diagnostics</span>
            </h1>
            <p className="hero-sub">
              EV charger not working, tripping breakers, showing fault codes, or failing to charge?
              FixMyEV Charger provides certified electricians for same-day Tesla Wall Connector, Level 2, and
              commercial charging station diagnostics with upfront pricing and guaranteed results.
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
              <Link className="hero-secondary-btn" id="hero-services-btn" href="/services/">
                <span>View Services</span>
                <i className="ph-bold ph-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-card-frame">
              <img
                src="/images/ev/hero_ev.jpg"
                alt="Certified electrician servicing residential EV charging station"
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
              <div className="feature-strip-label">Emergency EV Charger Repair</div>
            </div>
            <div className="feature-strip-item">
              <div className="feature-strip-num">All Brands</div>
              <div className="feature-strip-label">Tesla, ChargePoint, JuiceBox & More</div>
            </div>
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
            <h2>From Your Call to a Fixed Charger in 4 Steps</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 540, margin: "0 auto" }}>
              When your EV charger fails, you need immediate expert service.
              Our streamlined process ensures certified electricians arrive fast.
            </p>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            {[
              {
                num: "1",
                title: "Call 24/7 Service Hotline",
                desc: "Dial (877) 596-2182 anytime. Our dispatch team answers around the clock with zero hold time to schedule your EV charger repair.",
              },
              {
                num: "2",
                title: "Electrician Arrives Promptly",
                desc: "A certified electrician arrives at your location, equipped with advanced diagnostic tools and common EV charger replacement components.",
              },
              {
                num: "3",
                title: "Comprehensive Diagnosis & Quote",
                desc: "Your electrician inspects the EVSE unit, circuit breaker, wiring, and connector, then provides a written flat-rate quote before any work starts.",
              },
              {
                num: "4",
                title: "Charger Fixed & Fully Tested",
                desc: "Your EV charger is repaired to code, charging performance is verified with a live vehicle test, and safe operation is confirmed.",
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

      {/* ========== SERVICES SECTION ========== */}
      <section className="section" id="services" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-lightning"></i> Our EV Charging Services
            </span>
            <h2>Complete EV Charger Repair & Electrical Services</h2>
            <p className="sub">
              From Tesla Wall Connector faults to commercial DC fast charger outages — we
              provide certified electrical repair with licensed electricians
              equipped for same-day service.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: "ph-fill ph-lightning",
                title: "Tesla Wall Connector Repair",
                desc: "Expert diagnosis and repair for Tesla Wall Connector Gen 2, Gen 3, and Universal models. We resolve fault codes, Wi-Fi issues, and power relay failures.",
                href: "/services/tesla-wall-connector-repair/",
              },
              {
                icon: "ph-fill ph-plug-charging",
                title: "Level 2 EV Charger Repair",
                desc: "Fast troubleshooting for all Level 2 (240V) home and workplace chargers. ChargePoint, JuiceBox, Grizzl-E, Wallbox, and more.",
                href: "/services/level-2-ev-charger-repair/",
              },
              {
                icon: "ph-fill ph-circuit-board",
                title: "EV Charger Circuit & Breaker Repair",
                desc: "Dedicated circuit installation, breaker upgrades, and wiring repairs for EV charging systems. Full NEC code compliance.",
                href: "/services/ev-charger-circuit-breaker-repair/",
              },
              {
                icon: "ph-fill ph-warning-octagon",
                title: "Emergency EV Charger Repair",
                desc: "Sparking, smoking, or tripping your main panel? Our emergency electricians respond 24/7 to isolate hazards and restore safe charging.",
                href: "/services/emergency-ev-charger-repair/",
              },
              {
                icon: "ph-fill ph-battery-charging-vertical",
                title: "DC Fast Charger Repair",
                desc: "Professional diagnosis for Level 3 DC fast charging stations. CCS/CHAdeMO connector faults, power module failures, and cooling system service.",
                href: "/services/dc-fast-charger-repair/",
              },
              {
                icon: "ph-fill ph-buildings",
                title: "Commercial EV Charger Repair",
                desc: "Enterprise-grade repair for multi-unit commercial installations, fleet depots, and parking structures. ChargePoint, Blink, ABB, and Tritium.",
                href: "/services/commercial-ev-charger-repair/",
              },
            ].map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-card-content">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link className="learn-more" href={service.href}>
                    Learn More <i className="ph-bold ph-arrow-right" style={{ fontSize: "1rem" }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Extra CTA Box */}
          <div style={{
            marginTop: "2.5rem",
            background: "linear-gradient(135deg, #0b1d33, #132d4f)",
            borderRadius: "var(--radius)",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "var(--shadow-md)",
            color: "#fff",
            border: "1px solid rgba(0, 229, 153, 0.15)",
          }}>
            <h3 style={{ color: "#fff", fontSize: "1.35rem", marginBottom: ".75rem" }}>
              <i className="ph-fill ph-question" style={{ color: "var(--accent)", marginRight: ".5rem" }}></i>
              EV Charger Issue We Didn&apos;t List?
            </h3>
            <p style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1rem",
              maxWidth: 620,
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}>
              No EV charging problem is too complex. From firmware failures and
              network connectivity issues to complete electrical panel upgrades,
              call our service line to speak with a certified EV electrician now.
            </p>
            <a href="tel:18775962182" className="btn btn-primary" style={{ minHeight: 52, padding: "0 2.25rem" }}>
              <i className="ph-fill ph-phone-call"></i> Call 24/7: (877) 596-2182
            </a>
          </div>
        </div>
      </section>

      {/* ========== WHY US SECTION ========== */}
      <section className="section why-section" id="why-us">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-shield-check"></i> Why Choose Us
            </span>
            <h2>Why EV Owners Choose FixMyEV Charger</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              When your EV charger fails, you need a certified team that diagnoses
              accurately and resolves the problem right the first time.
            </p>
          </div>

          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                icon: "ph-fill ph-clock-afternoon",
                title: "24/7 Emergency Electrical Service",
                desc: "EV charger emergencies strike without warning. Our certified electricians are operational 24/7, 365 days a year, responding promptly when you need help most.",
              },
              {
                icon: "ph-fill ph-tag",
                title: "Upfront Written Pricing",
                desc: "You receive a complete diagnostic report and an upfront, flat-rate quote before any repair begins. The price you approve is the price you pay — zero hidden fees.",
              },
              {
                icon: "ph-fill ph-graduation-cap",
                title: "All Major EV Charger Brands",
                desc: "Our electricians service Tesla, ChargePoint, JuiceBox, Grizzl-E, Wallbox, ClipperCreek, Siemens, Blink, ABB, and Tritium chargers.",
              },
              {
                icon: "ph-fill ph-shield-check",
                title: "Guaranteed Safe Charging",
                desc: "Every repair concludes with comprehensive electrical testing, live vehicle charge verification, and a satisfaction guarantee on all workmanship.",
              },
              {
                icon: "ph-fill ph-truck",
                title: "Fully Equipped Service Vehicles",
                desc: "Our service vehicles carry common EVSE components — contactors, relays, breakers, J1772 connectors, and wiring supplies — for fast, single-visit repairs.",
              },
              {
                icon: "ph-fill ph-star-four",
                title: "Licensed & Certified Electricians",
                desc: "Our team consists of licensed, certified, and insured electricians who specialize in EV charging systems and know local electrical codes inside and out.",
              },
            ].map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-icon-box">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATES SECTION ========== */}
      <section className="section states-section" id="states">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-map-trifold"></i> Nationwide Coverage
            </span>
            <h2>Find FixMyEV Charger in Your State</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 600, margin: ".75rem auto 0" }}>
              We provide professional EV charger repair and electrical services
              nationwide. Choose your state to find certified EV charging
              specialists in your community.
            </p>
          </div>
          <div className="state-chips">
            {STATES.map((state) => (
              <Link key={state} className="state-chip" href={`/states/${slugify(state)}/`}>
                {state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="section map-section">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-map-pin"></i> Coverage Map
            </span>
            <h2>Our Service Area</h2>
          </div>
          <div className="area-map">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=United%20States&t=&z=4&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="EV charger repair service area map for United States"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <FAQSection />
    </Layout>
  );
}

function FAQSection() {
  return <FAQClient />;
}

function FAQClient() {
  "use client";
  const faqs = [
    {
      q: "How do I know if my EV charger needs professional repair?",
      a: "Common signs include fault indicator lights (red/amber LEDs), the charger failing to initiate a charging session, tripping your circuit breaker, reduced charging speed, or error codes on the charger display. If your vehicle consistently fails to charge, professional EV charger diagnostics are essential.",
    },
    {
      q: "Why does my EV charger keep tripping the breaker?",
      a: "Repeated breaker trips typically indicate an undersized circuit, loose wiring connections, a ground fault within the EVSE unit, or a deteriorating breaker. A licensed electrician should perform a load calculation and inspect the dedicated circuit to identify and resolve the root cause safely.",
    },
    {
      q: "Do you repair Tesla Wall Connectors?",
      a: "Yes. Our certified electricians service Tesla Wall Connector Gen 2, Gen 3, and Universal models. We diagnose fault codes, Wi-Fi connectivity issues, internal relay failures, and thermal cutoff problems to restore full charging capability.",
    },
    {
      q: "What brands of EV chargers do you repair?",
      a: "We repair all major EV charger brands including Tesla, ChargePoint, JuiceBox, Grizzl-E, Wallbox, ClipperCreek, Siemens, Blink, SemaConnect, ABB, and Tritium, covering Level 2 home chargers, workplace units, and DC fast charging stations.",
    },
    {
      q: "Do you provide emergency EV charger repair?",
      a: "Yes, FixMyEV Charger provides 24/7 emergency EV charger repair for electrical hazards, sparking units, breaker failures, and critical charging station outages. Our licensed electricians respond immediately to prevent safety risks and restore charging.",
    },
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <span className="badge badge-outline">
            <i className="ph-fill ph-question"></i> FAQ
          </span>
          <h2 style={{ color: "#fff" }}>Frequently Asked Questions</h2>
          <p style={{ color: "rgba(255,255,255,.7)", maxWidth: 600, margin: ".75rem auto 0" }}>
            Got questions about your EV charger or electrical system? Here are the
            most common questions EV owners ask before booking a service call.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, defaultOpen = false }) {
  "use client";
  return (
    <details className="faq-item" open={defaultOpen || undefined}>
      <summary className="faq-question">
        <span>{question}</span>
        <div className="faq-icon">
          <i className="ph-bold ph-plus"></i>
        </div>
      </summary>
      <div className="faq-answer" style={{ maxHeight: "none" }}>
        <p>{answer}</p>
      </div>
    </details>
  );
}
