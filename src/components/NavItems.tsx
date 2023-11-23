'use client';

import { useState } from 'react';
import NavItem from './NavItem';
import { PRODUCT_CATEGORIES, ProductCategory } from '@/config';

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const categories = PRODUCT_CATEGORIES();

  return (
    <div className='flex gap-4 h-full'>
      {categories.map((category: ProductCategory, i: number) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
