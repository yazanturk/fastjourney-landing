
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Map, Globe } from 'lucide-react';

const MilestonesSection = () => {
  const milestones = [
    {
      icon: Rocket,
      year: '2025',
      title: 'Launch in Amman',
      description: 'Our journey begins with a full-scale launch in Amman, Jordan, establishing our core operations.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Map,
      year: '2026-2027',
      title: 'KSA & UAE Expansion',
      description: 'Strategic expansion into key markets: Saudi Arabia and the United Arab Emirates.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Globe,
      year: '2028+',
      title: 'Egypt & Beyond',
      description: 'Further expansion into Egypt and other promising markets in the MENA region.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'circOut' } },
  };

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Roadmap</span></h2>
          <p className="section-subtitle">
            Charting our course for growth and impact across the MENA region.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              {/* //hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white */}

              <div className="hidden md:block w-1/2"></div>
              <div className={`hidden md:flex relative px-2 w-12 h-12 rounded-full flex items-center justify-center ${milestone.bgColor}`}>
                <milestone.icon className={`w-6 h-6 ${milestone.color}`} />
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <div className={`p-6 rounded-lg shadow-xl border-l-4 ${milestone.bgColor} border-${milestone.color.replace('text-', '')}`}>
                  <div className="flex items-center md:hidden mb-3">
                    <div className={`relative mr-3 w-10 h-10 rounded-full ${milestone.bgColor} flex items-center justify-center`}>
                      <milestone.icon className={`w-5 h-5 ${milestone.color}`} />
                    </div>
                    <span className={`font-bold text-xl ${milestone.color}`}>{milestone.year}</span>
                  </div>
                  <span className={`font-bold text-xl ${milestone.color} hidden md:inline-block`}>{milestone.year}</span>
                  <h3 className={`mt-1 text-2xl font-semibold text-foreground`}>{milestone.title}</h3>
                  <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MilestonesSection;
