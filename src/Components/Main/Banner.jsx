import React from "react";

const Banner = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[80px] py-22  bg-[#0d0d0d]">
      
      <div
        style={{ backgroundImage: "url('/Background Images.png')" }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between
        gap-6 px-6 sm:px-10 lg:px-14
        py-10
        min-h-[260px] lg:min-h-[305px]
        bg-cover bg-center rounded-xl"
      >
        
        <div className="max-w-[600px]">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Start your free trial today!
          </h1>

          <p className="text-sm sm:text-base text-[#999999] mt-4">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>

        <button className="px-6 py-3 text-white text-sm font-semibold bg-red-600 rounded-[8px] whitespace-nowrap">
          Start a Free Trial
        </button>

      </div>
    </div>
  );
};

export default Banner;