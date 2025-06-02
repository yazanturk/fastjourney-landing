
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Percent, Truck, Megaphone } from 'lucide-react';

const BusinessModelSection = () => {
  const revenueStreams = [
    {
      icon: Percent,
      title: 'Order Commissions',
      description: 'A percentage-based commission on orders facilitated through our platform.',
    },
    {
      icon: Truck,
      title: 'Delivery Fees',
      description: 'Transparent delivery fees that ensure fair compensation for our riders and operational sustainability.',
    },
    {
      icon: Megaphone,
      title: 'In-App Advertising',
      description: 'Opportunities for partners to promote their offerings to a targeted audience within the app.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="business-model" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Business Model</span></h2>
          <p className="section-subtitle">
            We operate on a multi-faceted revenue model designed for sustainable growth and mutual benefit with our partners.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {revenueStreams.map((stream, index) => (
            <motion.custom
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full text-center shadow-lg hover:shadow-secondary/30 transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <stream.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{stream.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stream.description}</p>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
