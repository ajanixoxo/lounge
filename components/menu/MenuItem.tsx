'use client';

import React from 'react';
import { motion } from 'motion/react';

interface MenuItemProps {
 name: string;
 price: string;
 description: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
 name,
 price,
 description,
}) => (
 <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="group py-4 border-b border-white/5"
 >
  <div className="flex justify-between items-baseline gap-4">
   <h4 className="text-[17px] font-bold font-serif group-hover:text-rixos-gold transition-colors duration-500">
    {name}
   </h4>
   <span className="text-[14px] font-bold text-white whitespace-nowrap">
    {price.startsWith('₦') ? price : `₦${price}`}
   </span>
  </div>
  <p className="text-[14px] mt-1 italic font-light leading-relaxed text-[#787878]">
   {description}
  </p>
 </motion.div>
);
