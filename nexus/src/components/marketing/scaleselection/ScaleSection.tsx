'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Custom easing for buttery-smooth entries
const SMOOTH_EASE : [number, number, number, number] = [0.16, 1, 0.3, 1];

// Node configuration with varied float durations for organic movement
const NETWORK_NODES = [
  { id: 'api-1', label: 'API', sub: '2,541 files', x: 32, y: 26, delay: 0.2, floatDuration: 4.5 },
  { id: 'api-2', label: 'API', sub: '2,341 files', x: 54, y: 15, delay: 0.3, floatDuration: 5.2 },
  { id: 'auth', label: 'Auth', sub: '412 files', x: 70, y: 26, delay: 0.4, floatDuration: 4.8 },
  { id: 'tests', label: 'Tests', sub: '2,201 files', x: 72, y: 60, delay: 0.5, floatDuration: 5.5 },
  { id: 'tested', label: 'Tested', sub: '1,204 files', x: 52, y: 82, delay: 0.6, floatDuration: 4.2 },
  { id: 'shared', label: 'Shared', sub: '900 files', x: 30, y: 75, delay: 0.7, floatDuration: 5.0 },
  { id: 'database', label: 'Database', sub: '902 files', x: 15, y: 48, delay: 0.8, floatDuration: 4.6 },
];

const STATS = [
  { value: '120K+', label: 'Files analyzed' },
  { value: '9.2M+', label: 'Lines of code' },
  { value: '42s', label: 'Average scan time' },
];

const CHECKLIST = [
  { label: 'Scanning files', val: '124,051' },
  { label: 'Building AST', val: '124,851' },
  { label: 'Resolving imports', val: '93,421' },
  { label: 'Building graph', val: '1,342' },
  { label: 'Generating insights', val: 'Done', highlight: true },
];

export default function ScaleSection() {
  return (
    <section className="py-24 bg-[#030303] overflow-hidden select-none font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Interface Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: SMOOTH_EASE }}
          className="relative rounded-[2.5rem] border border-white/[0.04] bg-[#07070a] overflow-hidden flex flex-col lg:flex-row min-h-[620px] shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Top Laser Trim Accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
          
          {/* Deep Spatial Lighting Environment */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,_rgba(99,102,241,0.06),transparent_45%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,_rgba(168,85,247,0.04),transparent_40%)] pointer-events-none" />

          {/* LEFT SIDE: Brand Messaging & Analytics Metrics */}
          <div className="relative z-30 flex flex-col justify-between p-12 lg:p-16 lg:w-5/12 max-w-xl">
            <div>
              <motion.h2 
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: SMOOTH_EASE }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
              >
                Understand any<br />codebase.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
                  Even at scale.
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: SMOOTH_EASE }}
                className="text-base lg:text-lg text-zinc-400 mb-14 leading-relaxed font-normal"
              >
                Nexus can analyze massive codebases in seconds and create a living, interactive map of your entire system architecture.
              </motion.p>
            </div>

            {/* Micro-Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.04]">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: SMOOTH_EASE }}
                >
                  <div className="text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 via-indigo-400 to-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: High-Fidelity Network Architecture Display */}
          <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 min-h-[500px]">
            
            {/* VIBRANT TOPOLOGY ENGINE CONTAINER */}
            <div className="relative flex-1 w-full h-full min-h-[440px]">
              
              {/* Dynamic Interconnection Vectors */}
              <svg 
                className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {NETWORK_NODES.map((node) => (
                  <g key={`vectors-${node.id}`}>
                    {/* Faint Background Line */}
                    <motion.line
                      x1="50" y1="50" x2={node.x} y2={node.y}
                      stroke="rgba(99, 102, 241, 0.1)"
                      strokeWidth="0.2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: node.delay, ease: SMOOTH_EASE }}
                    />
                    {/* Smooth Flowing Pulse */}
                    <motion.line
                      x1="50" y1="50" x2={node.x} y2={node.y}
                      stroke="url(#pulseGradient)"
                      strokeWidth="0.4"
                      strokeDasharray="15 30"
                      initial={{ strokeDashoffset: 45, opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{
                        strokeDashoffset: { repeat: Infinity, ease: "linear", duration: 3 },
                        opacity: { duration: 1, delay: node.delay + 0.5 }
                      }}
                    />
                  </g>
                ))}
                <defs>
                  <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c152ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#31e5ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* CORE SYMMETRY ENGINE HUB (Central Liquid Glass "N") */}
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
              >
                <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl scale-[1.8] transition-transform duration-1000 ease-out group-hover:scale-[2.2]" />
                
                {/* 3D Glass Emblem Shield */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-[#161522] to-[#0a0910] border border-indigo-400/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-center p-4 transition-all duration-700 ease-out group-hover:border-indigo-400/50 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]">
                  <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)]">
                    <path d="M 22 80 L 22 30 L 36 16 L 36 66 Z" fill="url(#leftN)" />
                    <path d="M 22 30 L 36 16 L 78 66 L 64 80 Z" fill="url(#diagN)" className="drop-shadow-[3px_5px_4px_rgba(0,0,0,0.5)]" />
                    <path d="M 64 20 L 78 20 L 78 66 L 64 50 Z" fill="url(#rightN)" />
                    <defs>
                      <linearGradient id="leftN" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#c152ff" />
                        <stop offset="100%" stopColor="#491cd6" />
                      </linearGradient>
                      <linearGradient id="diagN" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ca57ff" />
                        <stop offset="100%" stopColor="#31e5ff" />
                      </linearGradient>
                      <linearGradient id="rightN" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9175ff" />
                        <stop offset="100%" stopColor="#18a2ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              {/* FLOATING GLASSMORPHIC CYLINDER SATELLITES */}
              {NETWORK_NODES.map((node) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.6, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: node.delay, ease: SMOOTH_EASE }}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -6, 0],
                      x: [0, 2, 0] // Multi-axis drift for realism
                    }}
                    transition={{
                      duration: node.floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-[105px] rounded-2xl bg-[#0b0a11]/80 backdrop-blur-md border border-white/[0.05] py-2.5 px-3 flex flex-col items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 ease-out hover:border-indigo-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:bg-[#100f1a]/90"
                  >
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-[11px] font-bold text-zinc-200 tracking-wide transition-colors duration-300">
                      {node.label}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 mt-0.5 tracking-tight">
                      {node.sub}
                    </span>
                  </motion.div>
                </motion.div>
              ))}

            </div>

            {/* RIGHT SIDE: Real-Time Glass Terminal Status Control Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: SMOOTH_EASE }}
              className="relative z-20 lg:ml-auto bg-[#050508]/60 backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-7 w-full sm:w-[320px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.8)] flex-shrink-0"
            >
              <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-8 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Analysis Complete
              </h4>
              
              <div className="flex flex-col gap-5 mb-8">
                {CHECKLIST.map((item, i) => (
                  <div key={item.label} className="overflow-hidden">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: SMOOTH_EASE }}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3 text-zinc-300 font-medium">
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                          className={`flex items-center justify-center w-4 h-4 rounded-full ${item.highlight ? 'bg-emerald-500/20' : 'bg-white/5'}`}
                        >
                          <Check className={`w-3 h-3 stroke-[3] ${item.highlight ? 'text-emerald-400' : 'text-zinc-500'}`} />
                        </motion.div>
                        {item.label}
                      </div>
                      <span className={`font-mono text-[11px] ${item.highlight ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>
                        {item.val}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="pt-5 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-500 font-mono tracking-wider uppercase"
              >
                <span>System Metrics</span>
                <span className="text-zinc-400 font-bold">42.18s elapsed</span>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}