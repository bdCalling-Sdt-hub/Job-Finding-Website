import Elevate from '@/Components/Home/Elevate';
import HeroSection from '@/Components/Home/HeroSection';
import Resources from '@/Components/Home/Resources';
import SearchJob from '@/Components/Home/SearchJob';
import WeOffers from '@/Components/Home/WeOffers';
import React from 'react';

const Page = () => {
    return (
        <div>
            <HeroSection />
            <SearchJob />
            <WeOffers />
            <Resources />
            <Elevate />
        </div>
    );
}

export default Page;
