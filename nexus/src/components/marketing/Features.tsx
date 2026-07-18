'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, ArrowRight, Search, FileCode2, Command } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    title: 'Codebase Intelligence',
    description: 'Instantly understand structure, dependencies, and relationships.',
    illustration: (
      <div className="relative flex-1 bg-[#050508] rounded-xl border border-white/[0.05] overflow-hidden flex items-center justify-center p-4">
        <svg className="absolute inset-0 w-full h-full opacity-30" pointerEvents="none">
          <line x1="20%" y1="50%" x2="70%" y2="20%" stroke="#6C5CE7" strokeWidth="1" />
          <line x1="20%" y1="50%" x2="70%" y2="50%" stroke="#6C5CE7" strokeWidth="1" />
          <line x1="20%" y1="50%" x2="70%" y2="80%" stroke="#6C5CE7" strokeWidth="1" />
        </svg>
        <div className="absolute left-[15%] w-3 h-3 rounded-full bg-[#6C5CE7] shadow-[0_0_10px_rgba(108,92,231,0.5)] z-10" />
        <div className="absolute right-[15%] top-[15%] flex items-center gap-2 bg-[#0A0A0E] border border-white/[0.1] px-3 py-1.5 rounded-full z-10">
          <FileCode2 className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] text-zinc-300 font-mono">auth.ts</span>
        </div>
        <div className="absolute right-[15%] top-[45%] flex items-center gap-2 bg-[#0A0A0E] border border-white/[0.1] px-3 py-1.5 rounded-full z-10">
          <FileCode2 className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] text-zinc-300 font-mono">user.ts</span>
        </div>
        <div className="absolute right-[15%] top-[75%] flex items-center gap-2 bg-[#0A0A0E] border border-white/[0.1] px-3 py-1.5 rounded-full z-10">
          <FileCode2 className="w-3 h-3 text-orange-400" />
          <span className="text-[10px] text-zinc-300 font-mono">package.json</span>
        </div>
      </div>
    ),
  },
  {
    title: 'AI Chat with Context',
    description: 'Ask anything about your codebase. Get accurate, context-aware answers.',
    illustration: (
      <div className="relative flex-1 bg-[#050508] rounded-xl border border-white/[0.05] p-4 flex flex-col gap-4 overflow-hidden">
        <div className="self-end max-w-[85%] bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 rounded-2xl rounded-tr-sm px-4 py-2.5">
          <p className="text-xs text-[#A78BFA]">How does authentication work?</p>
        </div>
        <div className="self-start max-w-[90%] bg-white/[0.03] border border-white/[0.08] rounded-2xl rounded-tl-sm px-4 py-3">
          <p className="text-xs text-zinc-300 leading-relaxed">
            The authentication flow is handled in{' '}
            <code className="text-[#A78BFA] bg-[#6C5CE7]/10 px-1 py-0.5 rounded text-[10px] font-mono">
              src/auth.ts
            </code>{' '}
            using Better Auth.
          </p>
          <div className="mt-3 flex items-center gap-2 pt-3 border-t border-white/[0.05]">
            <div className="flex -space-x-1.5">
              <div className="w-4 h-4 rounded-full bg-zinc-700 border border-[#0A0A0E]" />
              <div className="w-4 h-4 rounded-full bg-zinc-600 border border-[#0A0A0E]" />
              <div className="w-4 h-4 rounded-full bg-zinc-500 border border-[#0A0A0E]" />
            </div>
            <span className="text-[10px] text-zinc-500">12 sources</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Smart Code Search',
    description: 'Find any function, file, or logic across your entire project.',
    illustration: (
      <div className="relative flex-1 bg-[#050508] rounded-xl border border-white/[0.05] p-3 flex flex-col gap-2 overflow-hidden">
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2 mb-2">
          <Search className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-xs text-zinc-500 font-mono">Search your codebase...</span>
        </div>
        {[
          { name: 'function getUserById', path: 'src/lib/users.ts:24' },
          { name: 'getUserPermissions', path: 'src/lib/permissions.ts:8' },
          { name: 'useUser', path: 'src/hooks/use-user.ts:12' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 p-2 rounded-md hover:bg-white/[0.02] cursor-pointer transition-colors"
          >
            <span className="text-xs font-mono text-zinc-200">{item.name}</span>
            <span className="text-[10px] font-mono text-zinc-600">{item.path}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'AI Code Actions',
    description: 'Generate, refactor, explain, and improve your code.',
    illustration: (
      <div className="relative flex-1 bg-[#050508] rounded-xl border border-white/[0.05] p-4 flex flex-col overflow-hidden font-mono text-[10px]">
        <div className="flex items-center gap-2 mb-3 text-[#A78BFA] bg-[#6C5CE7]/10 w-fit px-2 py-1 rounded">
          <Command className="w-3 h-3" />
          <span>Refactor this function</span>
        </div>
        <div className="flex text-zinc-500 gap-3 mb-1">
          <span>1</span>
          <div className="text-zinc-300">
            <span className="text-pink-400">async function</span>{' '}
            <span className="text-blue-400">getData</span>(id) {'{'}
          </div>
        </div>
        <div className="flex text-zinc-500 gap-3 mb-1">
          <span>2</span>
          <div className="text-zinc-300 ml-4">
            <span className="text-pink-400">const</span> res ={' '}
            <span className="text-pink-400">await</span>{' '}
            <span className="text-blue-400">fetch</span>(
            <span className="text-green-400">`/api/`</span>)
          </div>
        </div>
        <div className="flex text-zinc-500 gap-3 mb-1">
          <span>3</span>
          <div className="text-zinc-300 ml-4">
            <span className="text-pink-400">return</span> res.
            <span className="text-blue-400">json</span>();
          </div>
        </div>
        <div className="flex text-zinc-500 gap-3">
          <span>4</span>
          <div className="text-zinc-300">{'}'}</div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] hover:from-[#7C6DF0] hover:to-[#9B6CF9] text-white text-[10px] font-sans font-medium px-3 py-1.5 rounded shadow-[0_0_10px_rgba(108,92,231,0.4)] transition-all duration-200">
            Apply changes
          </button>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
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
                <Diamond className="w-3.5 h-3.5 text-[#6C5CE7] fill-[#6C5CE7]/20" />
                Everything you need
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              Powerful features.
              <br />
              Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#A78BFA]">
                real developers.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#features"
              className={buttonVariants({
                variant: 'outline',
                className:
                  'inline-flex items-center gap-2 border-white/[0.1] bg-transparent hover:bg-white/[0.05] text-white font-medium rounded-lg px-5 py-2.5 h-auto',
              })}
            >
              View all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] group hover:border-[#6C5CE7]/30 hover:shadow-[0_0_20px_rgba(108,92,231,0.15)] transition-all duration-300 h-[400px]"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] mb-8 line-clamp-2">
                {feature.description}
              </p>
              {feature.illustration}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}