export type User = {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  created_at: string;
};

export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  author: string;
  image: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  photo: string;
  created_at: string;
  updated_at: string;
};

export type Testimonial = {
  id: string;
  name: string;
  feedback: string;
  designation: string;
  avatar: string;
  created_at: string;
  updated_at: string;
};