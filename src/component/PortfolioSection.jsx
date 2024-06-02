import React from 'react';

import work from '../asset/work.jpeg';

import work2 from '../asset/work2.jpeg';
import work5 from '../asset/work5.jpeg';
import work6 from '../asset/work6.jpeg';


import img1 from '../asset/img1.jpeg';
import img2 from '../asset/img2.jpeg';
import img3 from '../asset/img3.jpeg';
import p1 from '../asset/p1.png';
import p2 from '../asset/p2.png';
// Import other images...

const PortfolioSection = () => {
  return (
    <section className="container mx-auto text-white bg-gray-800 py-12" id='portfolio'>
      <h2 className="text-3xl font-bold text-center mb-8">Our Work Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src={p1} alt="Work 2" className="rounded-lg" />
        <img src={work} alt="Work 1" className="rounded-lg" />
        <img src={p2} alt="Work 3" className="rounded-lg" />
        <img src={work2} alt="Work 1" className="rounded-lg" />
        <img src={work5} alt="Work 2" className="rounded-lg" />
        <img src={work6} alt="Work 3" className="rounded-lg" />
        <img src={img1} alt="Work 1" className="rounded-lg" />
        <img src={img2} alt="Work 2" className="rounded-lg" />
        <img src={img3} alt="Work 3" className="rounded-lg" />
        {/* Add more images here */}
      </div>
    </section>
  );
};

export default PortfolioSection;
