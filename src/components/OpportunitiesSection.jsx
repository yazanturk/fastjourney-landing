
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Home, Languages, CreditCard, Package, Pill } from 'lucide-react';

const OpportunitiesSection = () => {
  const opportunities = [
    { icon: MapPin, text: 'Serving underserved cities like Zarqa, Irbid, Aqaba.' },
    { icon: Home, text: 'Supporting and integrating home-based kitchens.' },
    { icon: Languages, text: 'Full Arabic UI/UX and local dialect support.' },
    { icon: CreditCard, text: 'Integration with local eWallets (Zain Cash, Dinarak).' },
    { icon: Package, text: 'Expansion to groceries, medicine, and parcel delivery.' },
    { icon: Pill, text: 'Specialized medicine delivery services.' },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="opportunities" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Growth <span className="text-gradient">Opportunities</span></h2>
          <p className="section-subtitle">
            Identifying key areas for expansion and innovation to better serve the MENA region.
          </p>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {opportunities.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 glassmorphic-card hover:border-accent">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
