'use client';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { PRODUCT_CATEGORIES } from '@/config';

type Category = (typeof PRODUCT_CATEGORIES)[];

interface NavItemProps {
  category: Category | any;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ category, handleOpen, isAnyOpen, isOpen }: NavItemProps) => {
  return (
    <div className='flex'>
      <div className='relative flex items-center'>
        <Button
          className='gap-1.5'
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          {category.label}{' '}
          <ChevronDown
            className={cn('h-4 w-4 transition-all text-muted-foreground', {
              '-rotate-180': isOpen,
            })}
          />{' '}
        </Button>
      </div>
    </div>
  );
};

export default NavItem;
