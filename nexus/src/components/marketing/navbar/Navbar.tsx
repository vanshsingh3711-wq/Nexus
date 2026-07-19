'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Menu, X } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Image from "next/image";
const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Changelog', href: '#changelog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-[#030303]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div  />
              <motion.div
                className="absolute inset-0 rounded-lg bg-[#6C5CE7] opacity-0 group-hover:opacity-40 blur-md transition-opacity"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div>
                <Image
                src="/assets/gemini-svg.svg"
                alt="Nexus Logo"
                width={70}
                height={70}
              /></div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#FAFAFA] via-[#E4E4E7] to-[#A1A1AA] bg-clip-text text-transparent">
              NEXUS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors rounded-lg group"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#6C5CE7]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all text-sm font-medium text-[#A1A1AA] hover:text-white"
            >
              <Star className="w-4 h-4 text-[#A1A1AA]" />
              2.3k
            </a>

            <Link
              href="/get-started"
              className={buttonVariants({
                className:
                  'hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] hover:from-[#7C6DF0] hover:to-[#9B6CF9] text-white font-semibold shadow-[0_0_20px_rgba(108,92,231,0.4)] hover:shadow-[0_0_30px_rgba(108,92,231,0.6)] transition-all duration-300 rounded-lg px-5 py-2.5 h-auto',
              })}
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              className="md:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-[72px] right-0 bottom-0 z-40 w-[300px] bg-[#030303]/95 backdrop-blur-2xl border-l border-white/[0.06] p-6 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-gradient-to-br from-[#6C5CE7] to-[#A78BFA] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold text-white">NEXUS</span>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 text-base font-medium text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-sm font-medium text-[#A1A1AA]"
                >
                  <Star className="w-4 h-4" />
                  Star on GitHub (2.3k)
                </a>
                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({
                    className:
                      'w-full bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] hover:from-[#7C6DF0] hover:to-[#9B6CF9] text-white font-semibold shadow-[0_0_20px_rgba(108,92,231,0.4)] rounded-xl py-6 text-base',
                  })}
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}