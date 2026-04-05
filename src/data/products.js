export const featuredProducts = [
  { id: 1, brand: 'adidas', name: 'Cartoon Astronaut T-shirt', price: 78, image: '/images/myshirt.jpg', stars: 5 },
  { id: 2, brand: 'Tommy Hilfiger', name: 'Tommy Hilfiger Retro-shirt', price: 125, image: '/images/fresh.jpg', stars: 5 },
  { id: 3, brand: 'adidas', name: "Men's Fashion T-shirt", price: 42, image: '/images/shirt5.jpg', stars: 5 },
  { id: 4, brand: 'Tetanura', name: "Men's Quality Cotton Shirt", price: 83, image: '/images/astro.jpg', stars: 5 },
  { id: 5, brand: 'Tommy Hilfiger', name: 'Women Trench Coat', price: 246, image: '/images/Tommy.jpg', stars: 5 },
  { id: 6, brand: 'Carhatt', name: "Men's Cargo Pants (Graphite)", price: 78, image: '/images/Carhatt.jpg', stars: 5 },
  { id: 7, brand: 'Tommy Hilfiger', name: "Men's Tropical Swim Shorts", price: 59, image: '/images/shorts.jpg', stars: 5 },
  { id: 8, brand: 'Carhatt', name: "Men's Jupiter Hoodie (Black)", price: 100, image: '/images/Jupiter.jpg', stars: 5 },
];

export const newArrivals = [
  { id: 9, brand: 'adidas', name: 'Cartoon Astronaut T-shirt', price: 78, image: '/images/shirt2.png', stars: 5 },
  { id: 10, brand: 'Tommy Hilfiger', name: 'Tommy Hilfiger Retro-shirt', price: 125, image: '/images/fresh.jpg', stars: 5 },
  { id: 11, brand: 'adidas', name: 'Up and Down Beachwear', price: 42, image: '/images/beach2.png', stars: 5 },
  { id: 12, brand: 'Kingband', name: "King James's Leisure Jacket", price: 83, image: '/images/kingband.jpg', stars: 5 },
  { id: 13, brand: 'Taylor Swift', name: 'High Fashion Aesthetic Shirt', price: 56, image: '/images/myshirt.jpg', stars: 5 },
  { id: 14, brand: 'Taylor Swift', name: 'Cartoon Astronaut Shirt', price: 60, image: '/images/shirt2.png', stars: 5 },
  { id: 15, brand: 'Yante', name: 'High Fashion Men Shirt', price: 105, image: '/images/astro.jpg', stars: 5 },
  { id: 16, brand: 'Kingband', name: "King James's Leisure Jacket (Red)", price: 83, image: '/images/KingJ.jpg', stars: 5 },
];

export const shopProducts = [
  { id: 17, brand: 'adidas', name: 'Cartoon Astronaut T-shirt', price: 78, image: '/images/mock5.jpg', stars: 5 },
  { id: 18, brand: 'Tommy Hilfiger', name: 'Tommy Hilfiger Retro-shirt', price: 125, image: '/images/triori.webp', stars: 5 },
  { id: 19, brand: 'adidas', name: "Men's Fashion T-shirt", price: 42, image: '/images/m3.jpg', stars: 5 },
  { id: 20, brand: 'Tetanura', name: "Men's Quality Cotton Shirt", price: 83, image: '/images/lie4.jpg', stars: 5 },
  { id: 21, brand: 'Tommy Hilfiger', name: 'Women Trench Coat', price: 246, image: '/images/Tommy.jpg', stars: 5 },
  { id: 22, brand: 'Carhatt', name: "Men's Cargo Pants (Graphite)", price: 78, image: '/images/Carhatt.jpg', stars: 5 },
  { id: 23, brand: 'Tommy Hilfiger', name: "Men's Tropical Swim Shorts", price: 59, image: '/images/shorts.jpg', stars: 5 },
  { id: 24, brand: 'Carhatt', name: "Men's Jupiter Hoodie (Black)", price: 100, image: '/images/Jupiter.jpg', stars: 5 },
  { id: 25, brand: 'adidas', name: 'Cartoon Astronaut T-shirt', price: 78, image: '/images/shirt2.png', stars: 5 },
  { id: 26, brand: 'Tommy Hilfiger', name: 'Tommy Hilfiger Retro-shirt', price: 125, image: '/images/fresh.jpg', stars: 5 },
  { id: 27, brand: 'adidas', name: 'Up and Down Beachwear', price: 42, image: '/images/beach2.png', stars: 5 },
  { id: 28, brand: 'Kingband', name: "King James's Leisure Jacket", price: 83, image: '/images/kingband.jpg', stars: 5 },
  { id: 29, brand: 'Taylor Swift', name: 'Women Flared Gown', price: 56, image: '/images/astro.jpg', stars: 5 },
  { id: 30, brand: 'Black Tongue', name: 'Black Tongue Anniversary Hoodie', price: 60, image: '/images/Blacktongue.jpg', stars: 5 },
  { id: 31, brand: 'Yante', name: "High Fashion Men's Shirt", price: 105, image: '/images/myshirt.jpg', stars: 5 },
  { id: 32, brand: 'Kingband', name: "King James's Leisure Jacket (Red)", price: 83, image: '/images/KingJ.jpg', stars: 5 },
];

export const allProducts = [...featuredProducts, ...newArrivals, ...shopProducts];

export const singleProduct = {
  id: 17,
  name: "Men's Fashion T Shirt",
  price: 78.00,
  breadcrumb: 'Home / T-Shirt',
  mainImage: '/images/mock5.jpg',
  thumbs: ['/images/mock5.jpg', '/images/triori.webp', '/images/m3.jpg', '/images/lie4.jpg'],
  sizes: ['XL', 'XXL', 'Small', 'Medium', 'Large'],
};
