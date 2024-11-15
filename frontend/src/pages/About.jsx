import React from "react";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import transition from "../transition";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Zenora was born from a deep passion for innovation and a vision to
            transform online shopping. Our journey started with a
            straightforward goal: to create a platform where customers can
            effortlessly discover, explore, and purchase a broad range of
            products from the comfort of their own space.
          </p>
          <p>
            From the beginning, we have been committed to curating a wide
            selection of premium products that cater to diverse tastes and
            preferences. Whether it's fashion, beauty, electronics, or home
            essentials, our collection is sourced from reputable brands and
            trusted suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower customers with
            freedom of choice, convenience, and confidence. We're focused on
            delivering a smooth and exceptional shopping experience, from
            browsing to checkout, right through to delivery and beyond.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default transition(About, "about") ;
