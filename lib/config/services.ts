// All supported service categories
export const serviceCategories = [
  'recruitment',
  'training',
  'design',
  'development',
  'marketing',
] as const;

// Sample services data with their categories
export const services = [
  {
    id: '1',
    category: 'design',
    title: 'UI/UX Design',
    description: 'Professional UI/UX design services for web and mobile applications.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    slug: 'ui-ux-design',
  },
  {
    id: '2',
    category: 'development',
    title: 'Web Development',
    description: 'Custom web development services using the latest technologies.',
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
    slug: 'web-development',
  },
  // ... other services
];

// Helper function to get all static params for category pages
export function getCategoryParams() {
  return serviceCategories.map(category => ({
    category,
  }));
}

// Helper function to get all static params for service pages
export function getServiceParams() {
  const params = [];
  
  // Add existing services
  services.forEach(service => {
    params.push({
      category: service.category,
      id: service.id,
    });
  });
  
  // Add create routes for each category
  serviceCategories.forEach(category => {
    params.push({
      category,
      id: 'create',
    });
  });
  
  return params;
}
