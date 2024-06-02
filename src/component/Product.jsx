import React,{useState} from 'react';
import { motion } from 'framer-motion';
// import {casement, combination, special} from '../asset';
import casement from '../asset/casement.jpg';
import combination from '../asset/combination.jpg';

import glassToGlass from '../asset/glass-to-glass.jpg';


import slidingUpvc from '../asset/sliding-upvc.jpg';
import fixed from '../asset/fixed.jpg';

import specialShaped from '../asset/special-shaped.jpg';

import bayWindowsShaped from '../asset/bay-windows.jpg';
import archedShaped from '../asset/arched.jpg';

import tilt from '../asset/tilt-turn.jpg';


const framesData = [
  {
    imgSrc: casement,
    imgAlt: "casement",
    title: "Casement Windows",
    description: "Casement windows are ideal for spaces with excellent exterior views. They are equipped with a unique double sealing mechanism that makes them air-tight and keeps out the noise, dust, and pollution. Casement windows are available in an array of choices (like top hung, side hung, etc.) complementing your home decor. Casement windows are held by hinges and open inwards or outwards, depending on the functionality required. Apart from this, we provide sturdy and aesthetically appealing wood, aluminium, and uPVC window frames for enhanced security and kerb appeal.",

  },
  {
    imgSrc: tilt,
    imgAlt: "tilt-turn",
    title: "Tilt & Turn Windows",
    description: "The tilt & turn windows are one of the most versatile windows available in the market. These windows are multifunctional. They tilt open at the top for controlled ventilation (when required) and swing open like a door for greater ventilation. The tilting option prevents rain from entering but allows the room to remain well aired. Both these operations are controlled by the simple turn of a handle. Apart from this, they are available in uPVC, wood, and aluminium frames to enhance durability and aesthetic features. Install them in spaces that require additional ventilation and comfort.",
    
  },
  {
    imgSrc: slidingUpvc,
    imgAlt: "sliding-upvc",
    title: "Sliding Doors and Windows",
    description: "Slider doors and windows consist of two or more sashes that open horizontally. These windows are placed along a track and fitted to rollers that enable smooth and swift movement. Further, as the sashes stay within the frame instead of opening outwards or inwards, sliding windows offer optimum space utilisation. Install them with aluminium, wood, or uPVC frames and enjoy a great panoramic view of the outdoors.",
  }
    ,
  {
    imgSrc: fixed,
    imgAlt: "fixed",
    title: "Fixed Windows",
    description: "For the spaces in your house that require natural lighting, the stationary, non-operative fixed window design is the ideal solution. It keeps out heat, dust, and noise and offers an unobstructed view for a greater aesthetic appeal. This type of windows can be further paired with other window styles and fitted in aluminium, wood, or uPVC frames for an appealing look and improved functionality.",

  },
  {
    imgSrc: glassToGlass,
    imgAlt: "glass-to-glass",
    title: "Glass to Glass Windows",
    description: "Glass to glass windows consist of glass panes that are seamlessly joined together, thereby eliminating the usage of mullions. They are stylish and complement contemporary interior designs to provide exceptional panoramic views from every angle, without any obstruction. Also available in aluminium, wood, and uPVC frames, glass to glass windows add a beautiful dimension to homes and create the illusion of an open space.",
   
  },
  {
    imgSrc: bayWindowsShaped,
    imgAlt: "bay-windows",
    title: "Bay Windows",
    description: "Perfect for the small protruding space in bedrooms or living rooms, bay windows create a cosy personal corner. They are a combination of three or more windows assembled together that extend outside the house, thus forming a bay shape and increasing the indoor space. Install this unique design with aluminium, wood, or uPVC frames to enhance the aesthetic appeal and functionality of the room.",
   
  },
  {
    imgSrc: archedShaped,
    imgAlt: "arched",
    title: "Arched Windows",
    description: "Arch-shaped windows are rectangular at the bottom and semi-circular at the top. Adding an aesthetic appeal to the overall look of the room, these round-top windows come in two styles – they can be fixed or can be opened to let the air in. Grids (bars dividing the windows’ glass) are often added to these durable and elegant looking windows to make them more utilitarian. They are available in various accents such as aluminium, wood, and uPVC frames to complement your overall home décor.",
   
  },
  {
    imgSrc: combination,
    imgAlt: "combination",
    title: "Combination Windows",
    description: "Functional in their essence, combination aluminium, wood, or uPVC windows are a blend of sliding, casement, and fixed windows. They are either a blend of the same type or different types of windows. Alternatively, they can be custom-made to fit individual preferences. Combination windows are designed to allow a lot of natural light and add the perfect touch of aesthetics to your room.",
    
  },
  
  
];

const FramesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="frames bg-gray-800 py-10">
      <div className="container text-white mx-auto text-center mb-10">
        <h3 className="text-2xl font-semibold">Our Range of</h3>
        <h2 className="text-4xl font-bold">uPVC,  Windows and Doors</h2>
      </div>
      <div className="flex flex-wrap text-white justify-center mx-auto">
        {framesData.map((frame, index) => (
          <div key={index} className="col-sm-6 col-md-6 col-lg-4 frames-box px-4 mb-8">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="frames-static">
                <img
                  src={frame.imgSrc}
                  alt={frame.imgAlt}
                  className="w-full h-auto"
                />
                <h5 className="text-xl font-semibold mt-4">{frame.title}</h5>
              </div>
              {hoveredIndex === index && (
                <motion.div
                  className="frames-hover absolute top-0 left-0 w-full h-full bg-teal-600 p-4 opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* <h5 className="text-xl font-semibold mb-2">{frame.title}</h5> */}
                  <p className="text-sm mb-4">{frame.description}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FramesSection;
