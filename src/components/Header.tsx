"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/ouverture", label: "Horaires" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Ferme le menu à chaque changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloque le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 w-full bg-ts-bg/70 backdrop-blur-lg z-50 border-b border-ts-red/10 shadow-[0_4px_30px_rgba(0,0,0,0.5),0_1px_5px_rgba(229,9,20,0.05)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/logo.webp"
                  alt="Times Square Sevran Logo"
                  width={96}
                  height={96}
                  className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <span className="text-xl md:text-2xl font-black tracking-tighter text-ts-white uppercase">
                  <span className="text-ts-red group-hover:text-ts-white transition-colors duration-300">SEVRAN</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-ts-gray hover:text-ts-white transition-colors uppercase tracking-widest text-xs font-black py-2 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ts-red transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA & Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/menu"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-ts-red text-sm font-black rounded-full text-ts-white bg-ts-red hover:bg-ts-darkred hover:border-ts-darkred shadow-[0_0_15px_rgba(229,9,20,0.3)] hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:scale-105 transform transition-all duration-300 uppercase tracking-widest"
              >
                Commander
              </Link>

              {/* Hamburger button */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-ts-white hover:text-ts-red hover:bg-white/5 transition-all duration-300 relative z-[60]"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0d0d0f] border-l border-white/[0.06] shadow-[-20px_0_60px_rgba(0,0,0,0.6)] flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-28 border-b border-white/[0.05]">
            <span className="text-xs font-black text-ts-red tracking-[0.4em] uppercase">Navigation</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-ts-gray hover:text-ts-white hover:bg-white/5 transition-all duration-200"
              aria-label="Fermer le menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href} style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-200 group ${
                      pathname === link.href
                        ? "text-ts-white bg-ts-red/10 border border-ts-red/20"
                        : "text-ts-gray hover:text-ts-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA en bas */}
          <div className="px-4 pb-8 pt-4 border-t border-white/[0.05]">
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-ts-red to-ts-darkred hover:from-[#ff1e2b] hover:to-ts-red text-xs font-black rounded-2xl text-ts-white uppercase tracking-widest shadow-[0_8px_25px_rgba(229,9,20,0.3)] hover:shadow-[0_10px_30px_rgba(229,9,20,0.45)] transition-all duration-300"
            >
              Commander maintenant
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
