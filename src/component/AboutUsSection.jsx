import React from 'react';
import work9 from '../asset/work9.jpeg'; // Make sure to replace this with the path to your actual image

const AboutUsSection = () => {
  return (
    <section className="bg-gray-800 mt-3 text-white py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img src={work9} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 text-white lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold  mb-4">Why Choose Us</h2>
            <p className=" mb-4">
              At [Your Company Name], we pride ourselves on delivering exceptional quality and service. Our commitment to excellence sets us apart in the industry.
            </p>
            <ul className="list-disc list-inside text-white" id='about'>
              <li className="mb-2"><strong>Quality Products:</strong> We use the finest materials and state-of-the-art technology to ensure our products meet the highest standards.</li>
              <li className="mb-2"><strong>Expert Team:</strong> Our team consists of highly skilled professionals with years of experience in the field.</li>
              <li className="mb-2"><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and strive to exceed their expectations with every project.</li>
              <li className="mb-2"><strong>Innovative Solutions:</strong> We stay ahead of the curve by incorporating the latest innovations and trends in our work.</li>
              <li className="mb-2"><strong>Competitive Pricing:</strong> We offer top-quality products and services at competitive prices.</li>
              <li className="mb-2"><strong>Sustainability:</strong> We are committed to environmentally friendly practices and sustainability in all aspects of our business.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
