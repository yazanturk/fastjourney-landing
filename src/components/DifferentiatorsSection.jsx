
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, BookOpen, Users2 } from 'lucide-react';

const DifferentiatorsSection = () => {
  const features = [
    {
      icon: Building,
      title: 'Focus on Local Businesses',
      description: 'We prioritize helping small local businesses, especially those in suburban areas, to thrive in the digital economy.',
    },
    {
      icon: BookOpen,
      title: 'Educational Support',
      description: 'Providing valuable training in marketing, culinary arts, and financial management through partnerships with local institutions.',
    },
    {
      icon: Users2,
      title: 'Community-Centric Approach',
      description: 'Building a delivery ecosystem that benefits everyone – from businesses and customers to the wider community.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Makes Us <span className="text-gradient">Different</span>?</h2>
          <p className="section-subtitle">
            We're not just another delivery app. We're building a sustainable ecosystem that empowers local communities.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.custom
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-secondary/10 rounded-full mb-4">
                    <feature.icon className="h-12 w-12 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl !text-secondary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
