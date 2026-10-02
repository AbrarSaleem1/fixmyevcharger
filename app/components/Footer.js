import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link className="logo footer-logo" href="/">
              <span className="logo-icon">
                <i className="ph-fill ph-lightning"></i>
              </span>
              <span>
                FixMyEV <span style={{ color: "var(--accent)" }}>Charger</span>
              </span>
            </Link>
            <p className="footer-desc">
              FixMyEV Charger provides 24/7 EV charger repair, Tesla Wall Connector
              service, Level 2 charger diagnostics, and emergency electrical
              services. Certified electricians with upfront pricing. Call
              (877) 596-2182 today!
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="footer-heading">Services</div>
            <ul>
              <li><Link href="/services/tesla-wall-connector-repair/">Tesla Wall Connector</Link></li>
              <li><Link href="/services/level-2-ev-charger-repair/">Level 2 Charger Repair</Link></li>
              <li><Link href="/services/ev-charger-circuit-breaker-repair/">Circuit & Breaker Repair</Link></li>
              <li><Link href="/services/emergency-ev-charger-repair/">Emergency Repair</Link></li>
              <li><Link href="/services/dc-fast-charger-repair/">DC Fast Charger Repair</Link></li>
              <li><Link href="/services/commercial-ev-charger-repair/">Commercial Charger Repair</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-heading">Company</div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services/">All Services</Link></li>
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="footer-heading">24/7 Live Support</div>
            <ul>
              <li>
                <a href="tel:18775962182">
                  <i className="ph-fill ph-phone-call" style={{ marginRight: "0.4rem", color: "var(--accent)" }}></i>
                  (877) 596-2182
                </a>
              </li>
              <li style={{ color: "rgba(255,255,255,.6)", fontSize: ".9rem", marginTop: ".5rem" }}>
                Available 24/7/365 - Rapid Emergency Service
              </li>
              <li style={{ color: "rgba(255,255,255,.6)", fontSize: ".9rem", marginTop: ".5rem" }}>
                Licensed & Insured Electricians
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.6,
        }}>
          Disclaimer: FixMyEV Charger provides residential and commercial EV charger
          repair, emergency electrical diagnostics, and charging station services.
          All diagnostics, repairs, and installations are performed by licensed
          and insured electricians.
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          &copy; {year} FixMyEV Charger. All rights reserved. &nbsp;&middot;&nbsp;
          <Link href="/privacy-policy/" style={{ color: "rgba(255,255,255,.4)", textDecoration: "none" }}>Privacy Policy</Link>
          &nbsp;&middot;&nbsp;
          <Link href="/terms-of-service/" style={{ color: "rgba(255,255,255,.4)", textDecoration: "none" }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
