'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function BottomCTA() {
  const router = useRouter();
  
    function handleClick() {
      router.push("/auth/login");
    }
  return (
    <section className="py-20 md:py-28 px-6 bg-[#030303]">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] p-10 md:p-16 overflow-hidden">
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6C5CE7]/40 to-transparent" />
          {/* Ambient background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#6C5CE7]/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#A78BFA]">
                  better software
                </span>
                ?
              </h2>
              <p className="text-lg text-[#A1A1AA] mb-10 leading-relaxed">
                Join thousands of developers using Nexus to ship faster and smarter.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => handleClick()}
                  className={buttonVariants({
                    className:
                      'inline-flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] hover:from-[#7C6DF0] hover:to-[#9B6CF9] text-white font-semibold shadow-[0_0_20px_rgba(108,92,231,0.4)] hover:shadow-[0_0_30px_rgba(108,92,231,0.6)] transition-all duration-300 rounded-lg px-7 py-4 h-auto text-base',
                  })}
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: 'outline',
                    className:
                      'inline-flex items-center gap-2 border-white/[0.1] bg-transparent hover:bg-white/[0.05] text-white font-semibold rounded-lg px-7 py-4 h-auto text-base',
                  })}
                >
                  <Star className="w-5 h-5 text-[#A1A1AA] group-hover:text-white transition-colors" />
                  Star on GitHub
                </a>
              </div>
            </div>

            {/* Right Graphic – sleek abstract Nexus mark */}
            <div className="relative flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-[#6C5CE7]/20 to-[#A78BFA]/10 border border-[#6C5CE7]/20 backdrop-blur-md shadow-[0_0_40px_rgba(108,92,231,0.2)] flex items-center justify-center relative">
                <div>
                  <Image
                    src="/assets/logo.svg"
                    alt="Nexus Logo"
                    width={500}
                    height={500}
                  />
                </div>
                {/* Subtle rotating accent ring */}
                <div className="absolute inset-0 rounded-3xl border border-[#6C5CE7]/10 animate-[spin_20s_linear_infinite] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}