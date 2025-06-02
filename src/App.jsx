
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import CSRSection from '@/components/CSRSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import MilestonesSection from '@/components/MilestonesSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import DataInsightsSection from '@/components/DataInsightsSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <DifferentiatorsSection />
        <CSRSection />
        <BusinessModelSection />
        <MilestonesSection />
        <OpportunitiesSection />
        <DataInsightsSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
