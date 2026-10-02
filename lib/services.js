export const SERVICES = [
  {
    slug: "tesla-wall-connector-repair",
    name: "Tesla Wall Connector Repair",
    title: "Tesla Wall Connector Repair | Certified EV Charging Service",
    shortDesc: "Expert diagnosis and repair for Tesla Wall Connector Gen 2, Gen 3, and Universal models.",
    image: "/images/ev/tesla_wall_connector.jpg",
    imageAlt: "Certified EV electrician repairing Tesla Wall Connector charging station",
    fullDesc:
      "Tesla Wall Connectors are precision-engineered chargers that require specialized electrical expertise when faults occur. FixMyEV Charger provides certified electricians trained in Tesla-specific fault codes, Wi-Fi connectivity issues, power relay failures, and thermal cutoff diagnostics. We restore full charging capability and verify safe operation.",
    icon: "ph-lightning",
    features: [
      "Gen 2 & Gen 3 Fault Code Diagnostics",
      "Wi-Fi & Firmware Connectivity Repair",
      "Internal Relay & Contactor Replacement",
      "240V Circuit Verification & Load Testing"
    ],
    symptoms: [
      "Tesla charger shows red or amber LED fault light",
      "Vehicle fails to initiate charging session",
      "Charger disconnects mid-charge repeatedly",
      "Wi-Fi connectivity lost or firmware update failure"
    ]
  },
  {
    slug: "level-2-ev-charger-repair",
    name: "Level 2 EV Charger Repair",
    title: "Level 2 EV Charger Repair | Home & Business Charging",
    shortDesc: "Fast troubleshooting and repair for all Level 2 (240V) home and workplace EV charging stations.",
    image: "/images/ev/hero_ev.jpg",
    imageAlt: "Electrician servicing Level 2 residential EV charging station mounted on garage wall",
    fullDesc:
      "Level 2 chargers deliver 240V power for efficient overnight or workplace charging. When your ChargePoint, JuiceBox, Grizzl-E, Wallbox, or other Level 2 EVSE malfunctions, our licensed electricians diagnose ground faults, GFCI trips, pilot signal errors, and relay failures to restore reliable charging.",
    icon: "ph-plug-charging",
    features: [
      "All Major Level 2 EVSE Brands Serviced",
      "GFCI & Ground Fault Isolation Testing",
      "J1772 Connector & Cable Replacement",
      "Dedicated 240V Circuit Inspection"
    ],
    symptoms: [
      "Charger trips breaker repeatedly when plugged in",
      "EVSE shows ground fault or GFCI error code",
      "Charging cable connector is physically damaged",
      "Charger powers on but vehicle does not charge"
    ]
  },
  {
    slug: "ev-charger-circuit-breaker-repair",
    name: "EV Charger Circuit & Breaker Repair",
    title: "EV Charger Circuit & Breaker Repair | Electrical Panel Service",
    shortDesc: "Dedicated circuit installation, breaker upgrades, and wiring repairs for EV charging systems.",
    image: "/images/ev/breaker_panel.jpg",
    imageAlt: "Licensed electrician inspecting electrical panel breaker for EV charger dedicated circuit",
    fullDesc:
      "EV chargers demand high-amperage dedicated circuits. Undersized wiring, overloaded panels, and faulty breakers are the leading causes of charger malfunctions and safety hazards. Our electricians perform panel load calculations, install properly rated breakers, run new dedicated circuits, and ensure NEC code compliance.",
    icon: "ph-circuit-board",
    features: [
      "Electrical Panel Load Analysis",
      "40A/50A/60A Breaker Installation",
      "Dedicated 6-Gauge Copper Wiring Runs",
      "Full NEC 625 Code Compliance Verification"
    ],
    symptoms: [
      "Breaker trips every time EV charger activates",
      "Burning smell near electrical panel or outlet",
      "Charger draws reduced amperage or charges slowly",
      "Panel is full with no room for EV charger breaker"
    ]
  },
  {
    slug: "emergency-ev-charger-repair",
    name: "Emergency EV Charger Repair",
    title: "Emergency EV Charger Repair | 24/7 Rapid Response",
    shortDesc: "Immediate 24/7 emergency dispatch for charger malfunctions, electrical hazards, and critical failures.",
    image: "/images/ev/hero_ev.jpg",
    imageAlt: "24/7 emergency EV charger repair electrician responding to critical charging station failure",
    fullDesc:
      "When your EV charger sparks, smokes, trips your main breaker, or creates an electrical hazard, every minute matters. FixMyEV Charger provides 24/7 emergency electrician dispatch to isolate dangerous faults, replace damaged components, and restore safe charging operation immediately.",
    icon: "ph-warning-octagon",
    features: [
      "24/7 Instant Emergency Dispatch",
      "Electrical Hazard Isolation & Shutoff",
      "Arc Fault & Thermal Damage Assessment",
      "Same-Day Component Replacement"
    ],
    symptoms: [
      "Sparking, smoke, or burning smell from charger unit",
      "EV charger causing main panel breaker to trip",
      "Melted or discolored charging plug or outlet",
      "Complete power loss to garage or charging area"
    ]
  },
  {
    slug: "dc-fast-charger-repair",
    name: "DC Fast Charger Repair",
    title: "DC Fast Charger (DCFC) Repair & Maintenance",
    shortDesc: "Professional diagnosis and repair for Level 3 DC fast charging stations and commercial DCFC units.",
    image: "/images/ev/commercial_ev.jpg",
    imageAlt: "Technician performing maintenance on commercial DC fast charging station DCFC unit",
    fullDesc:
      "DC fast chargers operate at 400-1000V and deliver rapid charging for commercial fleets, highway stations, and dealership lots. Our certified high-voltage technicians diagnose CCS/CHAdeMO connector faults, power module failures, cooling system issues, and network communication errors across all major DCFC manufacturers.",
    icon: "ph-battery-charging-vertical",
    features: [
      "CCS & CHAdeMO Connector Diagnostics",
      "Power Module & Rectifier Replacement",
      "Liquid Cooling System Service",
      "Network & Payment Terminal Troubleshooting"
    ],
    symptoms: [
      "DC fast charger displays communication error",
      "Charging session aborts at low state of charge",
      "Connector handle overheating during session",
      "Payment terminal or network connectivity failure"
    ]
  },
  {
    slug: "commercial-ev-charger-repair",
    name: "Commercial EV Charger Repair",
    title: "Commercial EV Charger Repair & Fleet Charging Service",
    shortDesc: "Enterprise-grade repair for multi-unit commercial charging installations, fleet depots, and parking structures.",
    image: "/images/ev/commercial_ev.jpg",
    imageAlt: "Commercial EV charging station repair technician servicing multi-unit fleet charging installation",
    fullDesc:
      "Commercial EV charging installations serve employees, customers, and fleet vehicles at scale. Downtime means lost revenue and stranded vehicles. FixMyEV Charger provides rapid commercial service for ChargePoint, Blink, SemaConnect, ABB, and Tritium units including load management systems, OCPP backend diagnostics, and multi-unit coordination.",
    icon: "ph-buildings",
    features: [
      "Multi-Station Load Management Repair",
      "OCPP Backend & Network Diagnostics",
      "Parking Structure & Pedestal Mounting",
      "Fleet Depot Scheduled Maintenance Programs"
    ],
    symptoms: [
      "Multiple chargers offline simultaneously",
      "Load management system not balancing power",
      "Charger reporting incorrect usage or billing data",
      "Physical damage to pedestal or cable management"
    ]
  }
];

export function getService(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return SERVICES.find((s) => s.slug === normalized) || null;
}
