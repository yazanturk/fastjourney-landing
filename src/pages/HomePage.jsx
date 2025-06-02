
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import CSRSection from '@/components/CSRSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import MilestonesSection from '@/components/MilestonesSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import DataInsightsSection from '@/components/DataInsightsSection';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function HomePage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="flex-grow"
    >
      <HeroSection />
      <AboutUsSection />
      <DifferentiatorsSection />
      <CSRSection />
      <BusinessModelSection />
      <MilestonesSection />
      <OpportunitiesSection />
      <DataInsightsSection />
    </motion.main>
  );
}

export default HomePage;
