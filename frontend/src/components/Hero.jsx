import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import {motion} from 'framer-motion'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [assets.hero_img_1, assets.hero_img_2]; // List of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on cleanup
  }, []);

  return (
    <div className="flex flex-col sm:flex-row-reverse border border-gray-400 mb-10 sm:mb-20 sm:mt-2">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
        <motion.div
              // ref={ref}
              className="overflow-hidden"
              initial={{ y: "100%" }}
              animate={{y:0}}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          >
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Right Side (Images) */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        <div className="relative w-full h-[450px] sm:h-[700px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`hero_img_${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                currentIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
