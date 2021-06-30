import React from 'react';
import AboutUs from './AboutUs';
import HeroBanner from './HeroBanner';
import LearnMore from './LearnMore';

const Banner = () => {

  return(
    <div>
        <HeroBanner />
        <AboutUs />
        <LearnMore />
    </div>
  );
}

export default Banner;