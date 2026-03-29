'use client';

import { MenuCategory } from '@/types/menu';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { MenuItem } from './MenuItem';

interface CollapsibleCategoryProps {
 cat: MenuCategory;
 isOpen: boolean;
 onToggle: () => void;
}

export const CollapsibleCategory: React.FC<
 CollapsibleCategoryProps
> = ({ cat, isOpen, onToggle }) => {
 return (
  <motion.div
   layout
   initial={{ opacity: 0, scale: 0.98 }}
   animate={{ opacity: 1, scale: 1 }}
   exit={{ opacity: 0, scale: 0.98 }}
   transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
   className="space-y-0"
  >
   <button
    onClick={onToggle}
    className="w-full flex items-center justify-between group py-1"
   >
    <h4 className="text-[14px] uppercase tracking-[0.3em] text-rixos-gold font-bold opacity-80 border-l-2 border-rixos-gold pl-2 transition-all group-hover:pl-3">
     {cat.title}
    </h4>
    <motion.div
     animate={{ rotate: isOpen ? 0 : -90 }}
     className="text-rixos-gold/40 group-hover:text-rixos-gold transition-colors"
    >
     <ChevronDown size={14} />
    </motion.div>
   </button>

   <AnimatePresence initial={false}>
    {isOpen && (
     <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
     >
      <div className="divide-y divide-white/5">
       {cat.items.map((item) => (
        <MenuItem
         key={item.id}
         {...item}
        />
       ))}
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </motion.div>
 );
};
