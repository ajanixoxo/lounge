"use client"

import React from 'react';
import { motion } from 'motion/react';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-100 bg-rixos-black flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-serif tracking-widest text-rixos-gold mb-2">
          RIXOS
        </h1>
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 text-white">
          Club & Lounge
        </p>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        className="h-px bg-rixos-gold/30 mt-8"
      />
    </motion.div>
  );
};
