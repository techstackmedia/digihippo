type ProductCategory = {
  label: string;
  value: string;
  featured: {
    name: string;
    href: string;
    imageSrc: string;
  }[];
};

type ProductCategoryProps = () => ProductCategory[];

const PRODUCT_CATEGORIES: ProductCategoryProps = () => [
  {
    label: 'UI Kits',
    value: 'ui_kits',
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Best ',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons',
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
];

export { PRODUCT_CATEGORIES };

export type { ProductCategory }
