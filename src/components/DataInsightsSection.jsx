
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataInsightsSection = () => {
  return (
    <section id="data" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Data & <span className="text-gradient">Insights</span></h2>
          <p className="section-subtitle">
            Understanding the market to drive growth and improve services. More detailed data visualizations coming soon!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-12 p-8 md:p-12 border-2 border-dashed border-primary/50 rounded-xl bg-primary/5 max-w-3xl mx-auto"
        >
          <BarChart3 className="h-24 w-24 text-primary mx-auto mb-6 opacity-70" />
          <h3 className="text-2xl font-semibold text-foreground mb-3">Market Trends & Projections</h3>
          <p className="text-muted-foreground mb-6">
            This section will feature interactive charts and data visualisations showcasing market size, growth potential, customer demographics, and other key metrics for the food delivery sector in Jordan and the MENA region.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Explore Sample Data (Coming Soon)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DataInsightsSection;
