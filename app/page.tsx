"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import { Intro } from '@/components/layout/Intro';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/lounge');
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative min-h-screen bg-rixos-black">
      <div className="grain" />
      <AnimatePresence>
        <Intro onComplete={() => router.push('/lounge')} />
      </AnimatePresence>
    </div>
  );
}
