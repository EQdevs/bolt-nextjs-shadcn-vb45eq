import { Testimonial } from './types';

// In-memory storage for testimonials (replace with your database in production)
let testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp',
    content: 'This product has transformed how we operate. The efficiency gains are remarkable!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
    createdAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'InnovateSoft',
    content: 'The developer experience is unmatched. Everything just works seamlessly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
    createdAt: new Date('2024-03-14'),
  },
];

export const getTestimonials = () => testimonials;

export const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'createdAt'>) => {
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date(),
  };
  testimonials = [newTestimonial, ...testimonials];
  return newTestimonial;
};