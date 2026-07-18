'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function ScaleSection() {
  return (
    <section className="py-24 bg-[#030303] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Container Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-white/[0.08] bg-[#0A0A0E] overflow-hidden flex flex-col lg:flex-row min-h-[500px] shadow-2xl"
        >
          {/* Top Edge Glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/10 via-[#0A0A0E]/0 to-transparent pointer-events-none" />

          {/* Left Side: Content & Stats */}
          <div className="relative z-10 flex flex-col justify-between p-10 lg:p-14 lg:w-5/12 max-w-xl">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Understand any<br />codebase.<br />Even at scale.
              </h2>
              <p className="text-lg text-zinc-400 mb-12">
                Nexus can analyze massive codebases in seconds and create a living map of your entire system.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1">
                  120K+
                </div>
                <div className="text-xs text-zinc-500">Files analyzed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1">
                  9.2M+
                </div>
                <div className="text-xs text-zinc-500">Lines of code</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1">
                  42s
                </div>
                <div className="text-xs text-zinc-500">Average scan time</div>
              </div>
            </div>
          </div>

          {/* Right Side: Visuals & Side Panel */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-10 lg:p-0 min-h-[400px]">
            
            {/* Center Node Graphic Placement */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen">
              {/* ACTION REQUIRED: Drop your exported node graph image here */}
              <div className="w-[80%] h-[80%] border border-dashed border-white/[0.1] rounded-full flex items-center justify-center">
                 <span className="text-zinc-600 text-sm font-medium">Export and place 'scale-nodes.png' here</span>
              </div>
              {/* <Image src="/scale-nodes.png" alt="Node Graph" fill className="object-contain scale-110" /> */}
            </div>

            {/* Analysis Complete Side Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-20 ml-auto mr-10 lg:mr-14 bg-[#050508]/80 backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 w-72 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <h4 className="text-sm font-semibold text-white mb-6">Analysis Complete</h4>
              
              <div className="flex flex-col gap-4 mb-6">
                {[
                  { label: 'Scanning files', val: '124,051' },
                  { label: 'Building AST', val: '124,851' },
                  { label: 'Resolving imports', val: '93,421' },
                  { label: 'Building graph', val: '1,342' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-zinc-500" />
                      {item.label}
                    </div>
                    <span className="text-zinc-500 font-mono">{item.val}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-zinc-500" />
                    Generating insights
                  </div>
                  <span className="text-emerald-500 font-mono">Done</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] text-xs text-zinc-500">
                Completed in 42.18s
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}