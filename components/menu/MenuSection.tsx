"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuSection as MenuSectionType } from '@/types/menu';
import { CollapsibleCategory } from './CollapsibleCategory';

interface MenuSectionProps {
  section: MenuSectionType;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [openCategoryTitle, setOpenCategoryTitle] = useState<string | null>(null);

  const DRINKS_TITLES = [
    "Cognac / Brandy", "Tequila", "Whisky", "Champagne & Sparkling", 
    "Liqueurs / Rum / Bitters", "Wine", "Beer", "Soft Drinks / Mixers", 
    "Signature Bar", "Mocktails", "Milkshakes", "Smoothies"
  ];
  const FOOD_TITLES = [
    "Rice (Lounge)", "Pasta & Noodles", "Soups", "Swallows", 
    "Protein & Grills", "Starters", "Salads", "Main / Pasta / Rice", 
    "Steakhouse Selection", "Grill & Exotic", "Desserts"
  ];
  const SHISHA_TITLES = ["Shisha"];

  const getGroup = (categoryTitle: string) => {
    if (DRINKS_TITLES.includes(categoryTitle)) return 'Drinks';
    if (FOOD_TITLES.includes(categoryTitle)) return 'Food';
    if (SHISHA_TITLES.includes(categoryTitle)) return 'Shisha';
    return 'Other';
  };

  const groups = ['All', 'Drinks', 'Food'];
  if (section.title === 'Lounge') groups.push('Shisha');

  const filteredCategories = selectedGroup === 'All' 
    ? section.categories 
    : section.categories.filter(cat => getGroup(cat.title) === selectedGroup);

  const handleGroupChange = (group: string) => {
    setSelectedGroup(group);
    
    // Calculate what the filtered categories WILL be after this state update
    const nextFiltered = group === 'All' 
      ? section.categories 
      : section.categories.filter(cat => getGroup(cat.title) === group);
      
    if (nextFiltered.length > 0) {
      setOpenCategoryTitle(nextFiltered[0].title);
    } else {
      setOpenCategoryTitle(null);
    }
  };

  return (
    <section className="pt-[68px] pb-16 px-6 md:px-24 max-w-7xl mx-auto relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[30vw] font-serif font-bold tracking-tighter">RIXOS</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-6xl md:text-8xl font-serif italic text-white/10 absolute -translate-y-1/2 pointer-events-none select-none">
          {section.title}
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif relative z-10 pt-4">
          {section.title} <span className="text-rixos-gold">Selection</span>
        </h3>
        <div className="w-12 h-px bg-rixos-gold mt-4" />
      </motion.div>

      {/* Group Tabs */}
      <div className="flex gap-8 mb-8 relative z-10 border-b border-white/5">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => handleGroupChange(group)}
            className="relative py-6 text-[10px] uppercase tracking-[0.4em] transition-all duration-500 group"
          >
            <span className={`relative z-10 transition-colors duration-500 ${selectedGroup === group ? 'text-rixos-gold' : 'text-white/30 group-hover:text-white'}`}>
              {group}
            </span>
            {selectedGroup === group && (
              <>
                <motion.div
                  layoutId="activeGroupTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-rixos-gold z-20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
                <motion.div
                  layoutId="activeGroupGlow"
                  className="absolute bottom-0 left-0 right-0 h-[8px] bg-rixos-gold/20 blur-md z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              </>
            )}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 min-h-[400px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat) => (
            <CollapsibleCategory 
              key={cat.title} 
              cat={cat} 
              isOpen={openCategoryTitle === cat.title}
              onToggle={() => setOpenCategoryTitle(openCategoryTitle === cat.title ? null : cat.title)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
