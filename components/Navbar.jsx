"use client";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/30 dark:bg-gray-900/30 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold text-indigo-600 tracking-wide">HV</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-indigo-500 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-indigo-500 hover:text-indigo-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
