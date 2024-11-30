import React from "react";
import { assets } from "../assets/assets";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center sm:items-start sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="flex flex-col justify-center sm:items-start items-center">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Zenora, we’re committed to offering a seamless shopping journey
            with a wide range of products to suit every style and need. Since
            our inception, we've set the standard for quality and convenience,
            ensuring your satisfaction with every purchase.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:items-start items-center">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 items-center sm:items-start">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between h-full items-center">
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600 items-center sm:items-start">
              <li>+91 00000 00000</li>
              <li>contact@zenora.com</li>
            </ul>
          </div>
          <div className="mt-5 text-gray-600 flex justify-center items-center">
            <a target="_blank" href="https://shoaibimran.com">Website by - <span className="underline text-black">shoaibimran.com</span></a><HiMiniArrowUpRight className="text-black ml-[2px] md:hidden"/>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ zenora.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
