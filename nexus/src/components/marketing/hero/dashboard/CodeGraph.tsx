// src/components/marketing/hero/dashboard/CodeGraph.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'center', label: '', x: 50, y: 50, type: 'center' },
  { id: 'frontend', label: 'Frontend', x: 25, y: 30 },
  { id: 'api', label: 'API', x: 75, y: 30 },
  { id: 'database', label: 'Database', x: 75, y: 70 },
  { id: 'auth', label: 'Auth', x: 25, y: 70 },
  { id: 'storage', label: 'Storage', x: 50, y: 20 },
  { id: 'ai', label: 'AI Agents', x: 50, y: 80 },
];

const connections = [
  ['center', 'frontend'],
  ['center', 'api'],
  ['center', 'database'],
  ['center', 'auth'],
  ['center', 'storage'],
  ['center', 'ai'],
];

export default function CodeGraph() {
  return (
    <div className="h-full bg-[#0F1117] border border-white/[0.06] rounded-2xl p-4 relative overflow-hidden">
      {/* Ultra‑subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Minimal floating particles – only 4, very faint */}
      {[
        { x: 20, y: 25, delay: 0 },
        { x: 80, y: 20, delay: 1 },
        { x: 80, y: 75, delay: 2 },
        { x: 25, y: 75, delay: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#7C5CFF]/30"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [-3, 3, -3],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            delay: p.delay,
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <svg viewBox="0 0 100 100" className="relative w-full h-full z-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Clean connections – draw once, then gently pulse */}
        {connections.map(([from, to], i) => {
          const f = nodes.find((n) => n.id === from)!;
          const t = nodes.find((n) => n.id === to)!;
          return (
            <motion.line
              key={i}
              x1={f.x}
              y1={f.y}
              x2={t.x}
              y2={t.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.8,
              }}
              transition={{
                pathLength: { duration: 1.2, delay: i * 0.1, ease: 'easeInOut' },
                opacity: { duration: 2, delay: i * 0.1 + 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
              }}
            />
          );
        })}

        {/* Service nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.type === 'center' ? 5 : 3}
            fill={node.id === 'ai' ? '#F59E0B' : node.type === 'center' ? '#7C5CFF' : '#4F8CFF'}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Center ring – one clean ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="9"
          fill="none"
          stroke="#7C5CFF"
          strokeWidth="0.5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Center Nexus logo */}
        <motion.g
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <text
            x="50"
            y="51"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="4.5"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
            style={{ textShadow: '0 0 12px rgba(124,92,255,0.7)' }}
          >
            N
          </text>
        </motion.g>
      </svg>

      {/* Clean service labels – placed outside nodes */}
      {nodes
        .filter((n) => n.label)
        .map((node) => {
          let posStyle: React.CSSProperties = {};
          if (node.id === 'frontend') {
            posStyle = { left: `${node.x - 4}%`, top: `${node.y - 1}%`, transform: 'translate(-100%, -50%)' };
          } else if (node.id === 'api') {
            posStyle = { left: `${node.x + 2}%`, top: `${node.y - 1}%`, transform: 'translate(0, -50%)' };
          } else if (node.id === 'database') {
            posStyle = { left: `${node.x + 2}%`, top: `${node.y + 1}%`, transform: 'translate(0, -50%)' };
          } else if (node.id === 'auth') {
            posStyle = { left: `${node.x - 4}%`, top: `${node.y + 1}%`, transform: 'translate(-100%, -50%)' };
          } else if (node.id === 'storage') {
            posStyle = { left: `${node.x}%`, top: `${node.y - 3}%`, transform: 'translate(-50%, -100%)' };
          } else if (node.id === 'ai') {
            posStyle = { left: `${node.x}%`, top: `${node.y + 3}%`, transform: 'translate(-50%, 0)' };
          }

          return (
            <span
              key={node.id}
              className="absolute text-[9px] font-medium text-[#9CA3AF]/80 pointer-events-none z-20 whitespace-nowrap"
              style={posStyle}
            >
              {node.label}
            </span>
          );
        })}
    </div>
  );
}