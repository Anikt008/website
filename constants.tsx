import React from 'react';
import { NavLink, Service, Project } from './types';
import { Layout, User, Layers } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'business',
    title: 'Business Website Design',
    description: 'Professional websites that build trust and convert visitors into loyal customers.',
    icon: 'Layout',
  },
  {
    id: 'personal',
    title: 'Personal Brand Website',
    description: 'Clean, tailored websites for individuals and creators looking to stand out.',
    icon: 'User',
  },
  {
    id: 'ui-design',
    title: 'Clean UI Layout Design',
    description: 'Modern layouts with proper spacing and clarity, optimized for the best user experience.',
    icon: 'Layers',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Corporate Identity',
    category: 'Business Website',
    description: 'A minimal and high-conversion landing page for a tech consultancy.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    isDemo: true,
  },
  {
    id: '2',
    title: 'Creative Portfolio Concept',
    category: 'Personal Brand',
    description: 'A refined gallery-style layout focused on visual storytelling.',
    imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800',
    isDemo: true,
  },
  {
    id: '3',
    title: 'E-commerce UI Kit',
    category: 'UI Layout',
    description: 'Structured, clean, and accessible design system for retail brands.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    isDemo: true,
  },
];

export const CONTACT_INFO = {
  name: 'Aniket Kumar',
  profession: 'Website Designer',
  email: 'aniketkumar27122004@gmail.com',
  whatsapp: '+91 7061984903',
  whatsappUrl: 'https://wa.me/917061984903',
  location: 'Muzaffarpur, Bihar, India',
};