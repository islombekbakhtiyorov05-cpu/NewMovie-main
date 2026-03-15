import React from 'react'

const Devices = () => {
  return (
    <div className='px-[20px] md:px-[80px] bg-[#0f0e0e] py-[40px] md:py-[60px]'>
        <div className='text-center md:text-left'>
            <h1 className='text-[24px] md:text-[28px] font-bold text-white leading-tight'>
                We Provide you streaming experience across various devices
            </h1>
            <p className='text-[12px] md:text-[14px] font-regular text-[rgba(153,153,153,1)] mt-[15px] md:mt-[20px] max-w-[800px]'>
                With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. 
                Our platform is designed to be compatible with a wide range of 
                <span className="hidden md:inline"><br /></span> devices, ensuring that you never miss a moment of entertainment.
            </p>
        </div>

        {/* Сетка карточек: 1 колонка на мобилках, 2 на планшетах, 3 на ПК */}
        <div className='mt-[30px] md:mt-[50px] flex flex-wrap justify-between gap-y-[15px] md:gap-y-[20px]'>
            
            {/* Универсальный стиль для всех карточек */}
            {[
                { title: "Smartphones", icon: "/Icon Container.png" },
                { title: "Tablets", icon: "/Icon Container (1).png" },
                { title: "Smart TV", icon: "/Icon Container (2).png" },
                { title: "Laptops", icon: "/Icon Container (3).png" },
                { title: "Gaming Consoles", icon: "/Icon Container (4).png" },
                { title: "VR Headsets", icon: "/Icon Container (5).png" }
            ].map((device, index) => (
                <div key={index} className='w-full sm:w-[48%] md:w-[32%] p-[25px] md:p-[40px] bg-[rgba(15,15,15,1)] border-[rgba(38,38,38,1)] bg-gradient-to-tr from-[rgba(229,0,0,0)] from-[60%] to-[rgba(229,0,0,0.1)] border-[1px] rounded-[9px] hover:border-[rgba(229,0,0,0.5)] transition-colors'>
                    <div className='flex items-center gap-[10px]'>
                        <img src={device.icon} alt="" className='w-[40px] md:w-auto' />
                        <h2 className='text-white text-[18px] md:text-[20px] font-semibold'>{device.title}</h2>
                    </div>
                    <div>
                        <p className='text-[14px] md:text-[16px] font-regular leading-[150%] text-[rgba(153,153,153,1)] mt-[15px] md:mt-[20px]'>
                            StreamVibe is optimized for both Android and iOS {device.title.toLowerCase()}. Download our app from the Google Play Store or the Apple App Store
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Devices