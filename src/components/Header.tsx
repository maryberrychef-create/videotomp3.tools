"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = scrolled ? "site-header site-header--scrolled" : "site-header";

  return (
    <header className={headerClass}>
      <div className="header__container">
        <Link 
          href="/" 
          className="brand" 
          aria-label="videotomp3.tools home"
          onClick={() => window.scrollTo(0, 0)}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" className="brand__icon">
            <defs>
              <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3370FF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#brandGrad)" />
            <path d="M 8 10 L 8 22 L 16 16 Z" fill="#ffffff" />
            <path d="M 20 12 L 18 12 L 18 20 L 20 20 L 22 23 L 22 9 Z" fill="#ffffff" />
            <path d="M 25 13 Q 27 16 25 19" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="brand__text">videotomp3.tools</span>
        </Link>

        <nav className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}