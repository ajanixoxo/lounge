'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

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
    className="text-center flex flex-col items-center"
   >
    <Image
     src="/logo.png"
     alt="RIXOS Logo"
     width={240}
     height={80}
     className="h-16 md:h-24 w-auto object-contain mb-4"
     priority
    />
    {/* <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 text-white">
          Club & Lounge
        </p> */}
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
