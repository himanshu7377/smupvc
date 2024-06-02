import React from 'react';
import img1 from '../asset/img1.jpg';
import img2 from '../asset/img2.jpg';
import img3 from '../asset/img3.jpg';

// Import other images...

const PortfolioSection = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Work Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src={img1} alt="Work 1" className="rounded-lg" />
        <img src={img2} alt="Work 2" className="rounded-lg" />
        <img src={img3} alt="Work 3" className="rounded-lg" />
        <img src={img1} alt="Work 1" className="rounded-lg" />
        <img src={img2} alt="Work 2" className="rounded-lg" />
        <img src={img3} alt="Work 3" className="rounded-lg" />
        <img src={img1} alt="Work 1" className="rounded-lg" />
        <img src={img2} alt="Work 2" className="rounded-lg" />
        <img src={img3} alt="Work 3" className="rounded-lg" />
        {/* Add more images here */}
      </div>
    </section>
  );
};

export default PortfolioSection;
