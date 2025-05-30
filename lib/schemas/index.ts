import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export const serviceSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }).max(100),
  category: z.string().min(1, { message: 'Category is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  image: z.string().url({ message: 'Please enter a valid URL' }),
  slug: z.string().min(1, { message: 'Slug is required' }).regex(/^[a-z0-9-]+$/, {
    message: 'Slug can only contain lowercase letters, numbers, and hyphens',
  }),
});

export const blogSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }).max(100),
  content: z.string().min(1, { message: 'Content is required' }),
  tags: z.array(z.string()).min(1, { message: 'At least one tag is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  image: z.string().url({ message: 'Please enter a valid URL' }),
  slug: z.string().min(1, { message: 'Slug is required' }).regex(/^[a-z0-9-]+$/, {
    message: 'Slug can only contain lowercase letters, numbers, and hyphens',
  }),
});

export const teamMemberSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  role: z.string().min(1, { message: 'Role is required' }),
  bio: z.string().min(1, { message: 'Bio is required' }),
  linkedin: z.string().url({ message: 'Please enter a valid LinkedIn URL' }),
  photo: z.string().url({ message: 'Please enter a valid URL' }),
});

export const testimonialSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  feedback: z.string().min(1, { message: 'Feedback is required' }),
  designation: z.string().min(1, { message: 'Designation is required' }),
  avatar: z.string().url({ message: 'Please enter a valid URL' }),
});