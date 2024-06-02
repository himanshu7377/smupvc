import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../asset/img1.jpg';
import img2 from '../asset/img2.jpg';
import img3e from '../asset/img3e.jpg';

const slidesData = [
  { image: img1 },
  { image: img2 },
  { image: img3e },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative mb-1" id='home'>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="relative h-[684px] w-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-prev, .slick-next {
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .slick-prev {
          left: 10px;
        }
        .slick-next {
          right: 10px;
        }
        .slick-prev:before, .slick-next:before {
          color: white; /* Ensure arrows are visible on the image */
          font-size: 24px; /* Adjust size as needed */
        }
        .slick-dots {
          bottom: 20px; /* Adjust bottom value as needed to position dots over the image */
          z-index: 10;
        }
        .slick-dots li button:before {
          color: white; /* Ensure dot color contrasts with the image */
          font-size: 12px; /* Adjust size as needed */
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
