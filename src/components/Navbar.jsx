
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Features', href: '/#features' },
    { name: 'CSR', href: '/#csr' },
    { name: 'Roadmap', href: '/#roadmap' },
    { name: 'Opportunities', href: '/#opportunities' },
  ];

  const handleContactClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      navigate(href);
    }
  };


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-background/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('/')}
          >
            <Zap size={28} className="text-secondary" />
            <span>Fast Journey</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden bg-background/95 shadow-lg pb-4"
        >
          <div className="flex flex-col items-center space-y-4 pt-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-3/4"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
