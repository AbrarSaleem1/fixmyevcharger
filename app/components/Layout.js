"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* Mobile Sticky Call Button */}
      <div className="mobile-sticky-cta" role="complementary" aria-label="Call FixMyEV Charger">
        <a href="tel:18775962182">
          <i className="ph-fill ph-phone-call"></i>
        </a>
      </div>
    </>
  );
}
