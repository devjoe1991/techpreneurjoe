
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold font-heading gradient-text">
            Joe
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
