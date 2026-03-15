import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full px-4 sm:px-8 lg:px-16">
      
      <div className="py-12 lg:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        <div>
          <h1 className="text-white text-lg font-semibold">Home</h1>
          <ul className="mt-5 flex flex-col gap-2">
            <li><a className="text-[#999999] text-sm">Categories</a></li>
            <li><a className="text-[#999999] text-sm">Devices</a></li>
            <li><a className="text-[#999999] text-sm">Pricing</a></li>
            <li><a className="text-[#999999] text-sm" href="#questions">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold">Movies</h1>
          <ul className="mt-5 flex flex-col gap-2">
            <li><a className="text-[#999999] text-sm">Genres</a></li>
            <li><a className="text-[#999999] text-sm">Trending</a></li>
            <li><a className="text-[#999999] text-sm">New Release</a></li>
            <li><a className="text-[#999999] text-sm">Popular</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold">Shows</h1>
          <ul className="mt-5 flex flex-col gap-2">
            <li><a className="text-[#999999] text-sm">Genres</a></li>
            <li><a className="text-[#999999] text-sm">Trending</a></li>
            <li><a className="text-[#999999] text-sm">New Release</a></li>
            <li><a className="text-[#999999] text-sm">Popular</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold">Support</h1>
          <ul className="mt-5 flex flex-col gap-2">
            <li><a className="text-[#999999] text-sm">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold">Subscription</h1>
          <ul className="mt-5 flex flex-col gap-2">
            <li><a className="text-[#999999] text-sm">Plans</a></li>
            <li><a className="text-[#999999] text-sm">Features</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold">Connect With Us</h1>

          <div className="flex gap-3 mt-5">
            <img src="/Button.png" alt="" />
            <img src="/Button (1).png" alt="" />
            <img src="/Button (2).png" alt="" />
          </div>
        </div>

      </div>

      <div className="w-full h-[1px] bg-[#262626]" />

      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between py-6">

        <p className="text-[#999999] text-sm">
          ©2023 StreamVibe, All Rights Reserved
        </p>

        <div className="flex flex-wrap gap-6 text-[#999999] text-sm">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;