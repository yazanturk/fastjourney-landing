
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShoppingCart, MapPin } from 'lucide-react';

const AboutUsSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Fast Journey</span>
          </h2>
          <p className="section-subtitle">
            Fast Journey is a tech-powered food delivery platform serving restaurants, cloud kitchens, and groceries in Jordan. We are committed to revolutionizing the delivery landscape with innovation and community focus.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: 'For Restaurants', description: 'Empowering local eateries with wider reach and efficient delivery.' },
            { icon: ShoppingCart, title: 'For Groceries', description: 'Convenient grocery delivery, connecting stores with customers.' },
            { icon: MapPin, title: 'For Cloud Kitchens', description: 'Supporting the growth of virtual kitchens with our robust platform.' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay: index * 0.2 }}}}
            >
              <Card className="h-full text-center glassmorphic-card hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
