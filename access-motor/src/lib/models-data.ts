// Central models data - single source of truth for all prices
// To update prices: change here → rebuild → Cloudflare deploys automatically

export interface ModelData {
  name: string;
  slug: string;
  price: number;
  category: 'sport' | 'utility';
  categoryName: string;
  categorySlug: string;
  engine: string;
  seats: number;
  badge?: string;
  image: string;
}

export const allModels: ModelData[] = [
  // Sport ATVs - טרקטורוני ספורט
  {
    name: 'Access SP300',
    slug: 'sp300',
    price: 32990,
    category: 'sport',
    categoryName: 'טרקטורוני ספורט',
    categorySlug: 'sport',
    engine: '300cc',
    seats: 1,
    image: '/images/models/sp300.webp',
  },
  {
    name: 'Access SP400',
    slug: 'sp400',
    price: 41990,
    category: 'sport',
    categoryName: 'טרקטורוני ספורט',
    categorySlug: 'sport',
    engine: '400cc',
    seats: 1,
    badge: 'פופולרי',
    image: '/images/models/sp400.webp',
  },
  {
    name: 'Access SP 450 Sport',
    slug: 'sp450-sport',
    price: 44990,
    category: 'sport',
    categoryName: 'טרקטורוני ספורט',
    categorySlug: 'sport',
    engine: '450cc',
    seats: 1,
    badge: 'ספורט',
    image: '/images/models/sp450-sport.webp',
  },

  // Utility ATVs - טרקטורוני שטח
  {
    name: 'Access TENA 300',
    slug: 'tena-300',
    price: 26990,
    category: 'utility',
    categoryName: 'טרקטורוני שטח',
    categorySlug: 'utility',
    engine: '300cc',
    seats: 1,
    badge: 'משתלם',
    image: '/images/models/tena-300.webp',
  },
  {
    name: 'Access AX650',
    slug: 'ax650',
    price: 41990,
    category: 'utility',
    categoryName: 'טרקטורוני שטח',
    categorySlug: 'utility',
    engine: '650cc',
    seats: 1,
    image: '/images/models/ax650.webp',
  },
  {
    name: 'Access AMX800',
    slug: 'amx800',
    price: 42990,
    category: 'utility',
    categoryName: 'טרקטורוני שטח',
    categorySlug: 'utility',
    engine: '800cc',
    seats: 1,
    badge: 'פרמיום',
    image: '/images/models/amx800.webp',
  },
];

export const sportModels = allModels.filter((m) => m.category === 'sport');
export const utilityModels = allModels.filter((m) => m.category === 'utility');

export function formatPrice(price: number): string {
  if (price === 0) return 'להצעת מחיר';
  return '₪' + price.toLocaleString('he-IL');
}
