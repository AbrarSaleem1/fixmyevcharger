import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fixmyevcharger.us"),
  title: {
    default: "EV Charger Repair & Electrical Services | FixMyEV Charger",
    template: "%s | FixMyEV Charger",
  },
  description:
    "FixMyEV Charger provides 24/7 emergency EV charger repair, Tesla Wall Connector service & Level 2 charger diagnostics. Certified electricians. Call (877) 596-2182!",
  openGraph: {
    type: "website",
    siteName: "FixMyEV Charger",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "Content-Language": "en",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/fill/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/bold/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
