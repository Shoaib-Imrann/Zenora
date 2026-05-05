import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [assets.hero_img_1, assets.hero_img_2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-mx-4 sm:-mx-[5vw] md:-mx-[2vw] relative overflow-hidden mb-10 sm:mb-20">
      <div className="relative w-full aspect-[6/3] sm:aspect-[12/7] lg:aspect-[13/7]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero_img_${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
