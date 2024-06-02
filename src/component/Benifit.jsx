import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faTools, faPaintBrush, faShieldAlt, faBalanceScale, faLock, faWater, faLeaf } from '@fortawesome/free-solid-svg-icons';

const BenefitsSection = () => {
  return (
    <section className="container  text-white mx-auto py-6 md:py-6 bg-gray-800">
      <h2 className="text-3xl font-bold  text-center mb-6">Why Choose Upvc ?</h2>
      <ul className="grid grid-cols-2 text-black md:grid-cols-3 lg:grid-cols-4 gap-4  p-6 md:py-10">
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faVolumeUp} className="mr-2" />
          <span>Acoustic insulation</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faTools} className="mr-2" />
          <span>Maintenance-free</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faPaintBrush} className="mr-2" />
          <span>Aesthetics</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
          <span>Durability</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faBalanceScale} className="mr-2" />
          <span>Structural stability</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faLock} className="mr-2" />
          <span>Safety security mechanism</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faWater} className="mr-2" />
          <span>Drainage system</span>
        </li>
        <li className="flex items-center justify-center bg-gray-200 rounded-lg p-4 font-bold text-lg">
          <FontAwesomeIcon icon={faLeaf} className="mr-2" />
          <span>Eco-friendly</span>
        </li>
      </ul>
    </section>
  );
};

export default BenefitsSection;
