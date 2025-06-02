
import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">Fast Journey TST Co</span>
            </div>
            <p className="text-sm">
              A modern delivery ecosystem built for Jordan and beyond.
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#csr" className="hover:text-primary transition-colors">CSR</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-4">Connect With Us</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></a>
            </div>
            <p className="text-sm">Amman, Jordan</p>
            <p className="text-sm">contact@fastjourney.tst</p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} Fast Journey TST Co. All rights reserved. Designed with ❤️ in Jordan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
