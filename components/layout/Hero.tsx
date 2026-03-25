'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
 title: string;
 imagePath?: string;
}

export const Hero: React.FC<HeroProps> = ({
 title,
 imagePath = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920',
}) => {
 const hour = new Date().getHours();
 const greeting =
  hour < 12
   ? 'Good Morning'
   : hour < 18
     ? 'Good Afternoon'
     : 'Good Evening';

 return (
  <header className="h-[450px] flex flex-col items-center justify-center px-6 relative overflow-hidden">
   {/* Background Image */}
   <motion.div
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.3 }}
    transition={{ duration: 2.5, ease: 'easeOut' }}
    className="absolute inset-0 z-0 mx-auto"
    style={{ width: '100%', height: '450px' }}
   >
    <img
     src={imagePath}
     alt="Luxury Atmosphere"
     className="w-full h-full object-cover blur-[2px]"
     referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-linear-to-b from-rixos-black via-transparent to-rixos-black" />
    <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-rixos-black via-transparent to-transparent" />
   </motion.div>

   <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-center z-10"
   >
    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-rixos-gold mb-5">
     {greeting}
    </p>
    <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-serif leading-[0.85] tracking-tighter text-balance">
     Step Into the <br />
     <span className="italic leading-tight md:leading-[1.1] inline-block">
      {title}
     </span>
    </h1>
    <p className="mt-3 text-[12px] md:text-[14px] lg:text-[16px] font-normal text-white max-w-md mx-auto leading-relaxed">
     Indulge in handcrafted cocktails, premium spirits, and expertly
     prepared dishes in an atmosphere of modern luxury.
    </p>
   </motion.div>

   <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
   >
    <ChevronDown
     size={32}
     strokeWidth={1}
    />
   </motion.div>

   {/* Abstract Background Elements */}
   {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[30vw] bg-rixos-gold/5 rounded-full blur-[120px] pointer-events-none" /> */}
  </header>
 );
};
