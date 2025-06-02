
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accessibility, Leaf, Users, ShoppingBag } from 'lucide-react';

const CSRSection = () => {
  const initiatives = [
    {
      icon: Accessibility,
      title: 'Accessibility Focus',
      description: 'Implementing features to ensure our platform is usable by people with disabilities.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Delivery',
      description: 'Utilizing electric vehicles (EVs) and exploring drone technology for greener deliveries.',
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Offering training programs and internships to empower young individuals in our community.',
    },
    {
      icon: ShoppingBag,
      title: 'Support Local Artisans',
      description: 'Partnering with NGOs to source locally handmade delivery bags, supporting local craftsmanship.',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="csr" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Commitment to <span className="text-gradient">Society</span></h2>
          <p className="section-subtitle">
            Corporate Social Responsibility is at the heart of Fast Journey. We believe in giving back and building a better future.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <motion.custom
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full glassmorphic-card hover:border-secondary transition-all duration-300 p-2">
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-accent/10 rounded-full mb-3">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg !text-accent">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRSection;
