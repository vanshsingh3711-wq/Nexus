'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';

const testimonials = [
  {
    quote:
      "Nexus understands our entire monorepo better than any tool we've used. The context-aware AI suggestions save us hours every sprint.",
    name: 'Sergio D.',
    role: 'Staff Engineer, Vercel',
  },
  {
    quote:
      'The AI insights and code maps are incredibly accurate and actually useful. Our team adopted it within the first week.',
    name: 'Priya K.',
    role: 'Tech Lead, Stripe',
  },
  {
    quote:
      "It's like having a senior engineer who knows the entire project history. The code review assistant alone is a game-changer.",
    name: 'Marcus L.',
    role: 'Senior Developer, Linear',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex"
            >
              <Badge
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 rounded-full border-white/[0.08] bg-white/[0.03] text-[#A1A1AA]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#6C5CE7]" />
                Loved by developers
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Developers ship faster{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#A78BFA]">
                with Nexus.
              </span>
            </motion.h2>
          </div>

          {/* Navigation arrows — styled as outline buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-2"
          >
            <button
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
                className:
                  'border-white/[0.1] bg-transparent hover:bg-white/[0.05] text-white h-10 w-10 rounded-lg',
              })}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
                className:
                  'border-white/[0.1] bg-transparent hover:bg-white/[0.05] text-white h-10 w-10 rounded-lg',
              })}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] group hover:border-[#6C5CE7]/30 hover:shadow-[0_0_20px_rgba(108,92,231,0.15)] transition-all duration-300"
            >
              {/* Star rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#6C5CE7] fill-[#6C5CE7]"
                  />
                ))}
              </div>

              <p className="text-[#A1A1AA] leading-relaxed mb-8 flex-1">
                “{t.quote}”
              </p>

              <footer className="flex items-center gap-3 mt-auto">
                {/* Avatar placeholder with gradient */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A78BFA] flex items-center justify-center text-white font-semibold text-sm">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#A1A1AA]">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}