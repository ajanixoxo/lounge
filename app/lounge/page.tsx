'use client';

import React from 'react';
import {
 motion,
 useScroll,
 useSpring,
} from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/layout/Hero';
import { MenuSection } from '@/components/menu/MenuSection';
import { Footer } from '@/components/layout/Footer';
import menuData from '@/data/menu.json';

const LOUNGE_MENU = menuData.lounge;

export default function LoungePage() {
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
 });

 return (
  <div className="relative min-h-screen bg-rixos-black selection:bg-rixos-gold/30">
   <div className="grain" />

   {/* Progress Bar */}
   <motion.div
    className="fixed top-0 left-0 right-0 h-[2px] bg-rixos-gold z-70 origin-left"
    style={{ scaleX }}
   />

   <Navbar />

   <main className="relative z-10">
    <Hero
     title="Lounge Experience"
     imagePath="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
    />

    <MenuSection
     key={LOUNGE_MENU.title}
     section={LOUNGE_MENU}
    />
   </main>

   <Footer />

   {/* Structured Data */}
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Rixos Lounge - Lounge Experience',
      image: 'https://rixoslounge.com/og-image.jpg',
      address: {
       '@type': 'PostalAddress',
       streetAddress: 'Opp OMOOKE Hotel, Bravo, Akala Exp Road',
       addressLocality: 'Ibadan',
       addressCountry: 'NG',
      },
      servesCuisine: 'Nigerian, International',
      priceRange: '$$$',
      menu: 'https://rixoslounge.com/lounge',
     }),
    }}
   />
  </div>
 );
}
