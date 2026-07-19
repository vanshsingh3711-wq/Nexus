'use client';

import React from 'react';
import Link from 'next/link';
import Image from "next/image"

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Use Cases', 'Pricing', 'Changelog'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'API', 'Guides', 'Help Center'],
  },
  {
    title: 'Company',
    links: ['Blog', 'About', 'Contact', 'Careers'],
  },
  {
    title: 'Open Source',
    links: ['GitHub', 'AGPLv3 License', 'Self-Hosted'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030303] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 ml-0">
            <Link href="/" className="flex items-center gap-3 mb-4">
              
             <div>
              <Image
                              src="/assets/gemini-svg.svg"
                              alt="Nexus Logo"
                              width={70}
                              height={70}
                            />
             </div>
            </Link>
            <p className="text-sm text-[#A1A1AA] mb-6 max-w-[200px] leading-relaxed">
              The AI Operating System for Developers.
            </p>
            <div className="flex items-center gap-4 text-[#A1A1AA]">
             
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-[#A1A1AA]">
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}