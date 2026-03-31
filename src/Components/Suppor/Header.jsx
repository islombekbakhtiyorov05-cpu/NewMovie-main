import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const Header = () => {

const countries = [
  { name: "Uzbekistan", code: "+998", flag: "https://flagcdn.com/w40/uz.png" },
  { name: "Russia", code: "+7", flag: "https://flagcdn.com/w40/ru.png" },
  { name: "USA", code: "+1", flag: "https://flagcdn.com/w40/us.png" },
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Germany", code: "+49", flag: "https://flagcdn.com/w40/de.png" },
  { name: "France", code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Spain", code: "+34", flag: "https://flagcdn.com/w40/es.png" },
  { name: "Italy", code: "+39", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Turkey", code: "+90", flag: "https://flagcdn.com/w40/tr.png" },
  { name: "China", code: "+86", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "Japan", code: "+81", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "South Korea", code: "+82", flag: "https://flagcdn.com/w40/kr.png" },
  { name: "India", code: "+91", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Pakistan", code: "+92", flag: "https://flagcdn.com/w40/pk.png" },
  { name: "Kazakhstan", code: "+7", flag: "https://flagcdn.com/w40/kz.png" },
  { name: "Kyrgyzstan", code: "+996", flag: "https://flagcdn.com/w40/kg.png" },
  { name: "Tajikistan", code: "+992", flag: "https://flagcdn.com/w40/tj.png" },
  { name: "Turkmenistan", code: "+993", flag: "https://flagcdn.com/w40/tm.png" },
  { name: "UAE", code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Saudi Arabia", code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Egypt", code: "+20", flag: "https://flagcdn.com/w40/eg.png" },
  { name: "Brazil", code: "+55", flag: "https://flagcdn.com/w40/br.png" },
  { name: "Argentina", code: "+54", flag: "https://flagcdn.com/w40/ar.png" },
  { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w40/mx.png" },
  { name: "Canada", code: "+1", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "Australia", code: "+61", flag: "https://flagcdn.com/w40/au.png" },
  { name: "New Zealand", code: "+64", flag: "https://flagcdn.com/w40/nz.png" },
  { name: "South Africa", code: "+27", flag: "https://flagcdn.com/w40/za.png" },
  { name: "Nigeria", code: "+234", flag: "https://flagcdn.com/w40/ng.png" },
  { name: "Kenya", code: "+254", flag: "https://flagcdn.com/w40/ke.png" },
  { name: "Indonesia", code: "+62", flag: "https://flagcdn.com/w40/id.png" },
  { name: "Malaysia", code: "+60", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Thailand", code: "+66", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Vietnam", code: "+84", flag: "https://flagcdn.com/w40/vn.png" },
  { name: "Philippines", code: "+63", flag: "https://flagcdn.com/w40/ph.png" },
  { name: "Singapore", code: "+65", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "Netherlands", code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
  { name: "Belgium", code: "+32", flag: "https://flagcdn.com/w40/be.png" },
  { name: "Switzerland", code: "+41", flag: "https://flagcdn.com/w40/ch.png" },
  { name: "Sweden", code: "+46", flag: "https://flagcdn.com/w40/se.png" },
  { name: "Norway", code: "+47", flag: "https://flagcdn.com/w40/no.png" },
  { name: "Denmark", code: "+45", flag: "https://flagcdn.com/w40/dk.png" },
  { name: "Finland", code: "+358", flag: "https://flagcdn.com/w40/fi.png" },
  { name: "Poland", code: "+48", flag: "https://flagcdn.com/w40/pl.png" },
  { name: "Czech Republic", code: "+420", flag: "https://flagcdn.com/w40/cz.png" },
  { name: "Ukraine", code: "+380", flag: "https://flagcdn.com/w40/ua.png" },
];

const [open, setOpen] = useState(false);
const [selectedCountry, setSelectedCountry] = useState(countries[0]);
const [phone, setPhone] = useState(countries[0].code);

const handleSelect = (country) => {
  setSelectedCountry(country);
  setPhone(country.code);
};

  return (
    <div className='px-[20px] md:px-[80px] bg-[#0d0d0d] py-[20px] md:py-[40px] w-full flex flex-col md:flex-row md:justify-between gap-[20px] md:gap-0'>
      <div className='w-full md:w-[32%]'>
        <h1 className='text-[24px] md:text-[48px] font-bold text-white leading-[150%]'>Welcome to our support page!</h1>
        <p className='text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] leading-[150%] mt-[20px]'>We're here to help you with any problems you may be having with our product.</p>
        <div className='mt-[20px] h-[220px] md:h-[350px] w-full'>
          <img className='object-center object-cover h-full w-full' src="/public/Sub Container.png" alt="" />
        </div>
      </div>
      <div className='w-full md:flex flex-wrap gap-[20px] md:w-[64%] bg-[#0b0b0b] p-[20px] md:p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)]'>
        <div className='w-full md:w-[48%] flex flex-col mb-[16px] md:mb-0 md:h-[110px]'>
          <label htmlFor="firstName" className='text-white text-[16px] md:text-[18px] font-semibold'>First Name</label>
          <input id='firstName' type="text" placeholder='Enter Your First Name' className='w-full text-white bg-[rgba(20,20,20,1)] p-[12px] md:p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[16px] md:text-[18px]'/>
        </div>
        <div className='w-full md:w-[48%] flex flex-col mb-[16px] md:mb-0 md:h-[110px]'>
          <label htmlFor="lastName" className='text-white text-[16px] md:text-[18px] font-semibold'>Last Name</label>
          <input id='lastName' type="text" placeholder='Enter Your Last Name' className='w-full text-white bg-[rgba(20,20,20,1)] p-[12px] md:p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[16px] md:text-[18px]'/>
        </div>
        <div className='w-full md:w-[48%] flex flex-col mb-[16px] md:mb-0 md:h-[110px]'>
          <label htmlFor="email" className='text-white text-[16px] md:text-[18px] font-semibold'>Email</label>
          <input id='email' type="email" placeholder='Enter Your Email' className='w-full text-white bg-[rgba(20,20,20,1)] p-[12px] md:p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[16px] md:text-[18px]'/>
        </div>
        <div className='w-full md:w-[48%] flex flex-col mb-[16px] md:mb-0 md:h-[110px]'>
          <label htmlFor="number" className='text-white text-[16px] md:text-[18px] font-semibold'>Phone Number</label>
          <div className='flex gap-[10px]'>
            <div className='relative mt-[10px]'>
              <div
                onClick={() => setOpen(!open)}
                className='bg-[rgba(20,20,20,1)] p-[14px] md:p-[17px] rounded-[9px] border border-[rgba(38,38,38,1)] flex items-center justify-between cursor-pointer w-[80px] md:w-[90px]'
              >
                <img src={selectedCountry.flag} className='w-[28px] md:w-[32px] h-[20px] md:h-[22px]' />
                <ChevronDown
                  size={20}
                  className={`transition-transform ${open ? "rotate-180" : ""} text-white`}
                />
              </div>
              {open && (
                <div className='absolute left-0 top-[70px] w-[280px] md:w-[400px] bg-[rgba(20,20,20,1)] border border-[rgba(38,38,38,1)] rounded-[9px] p-[15px] z-50'>
                  <div className='flex gap-[20px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600'>
                    {countries.map((c, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          handleSelect(c);
                          setOpen(false);
                        }}
                        className='flex flex-col items-center min-w-[70px] cursor-pointer hover:opacity-80'
                      >
                        <img src={c.flag} className='w-[40px] h-[25px] object-cover rounded-[3px]' />
                        <span className='text-white text-[14px] mt-[5px]'>{c.code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <input type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your Phone Number'
              className='w-full text-white bg-[rgba(20,20,20,1)] p-[12px] md:p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[16px] md:text-[18px]'/>
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor="message" className='text-white text-[16px] md:text-[18px] font-semibold'>Message</label>
          <textarea name="" id="message" placeholder='Enter Your Message' className='w-full h-[120px] md:h-[140px] text-white bg-[rgba(20,20,20,1)] p-[12px] md:p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[16px] md:text-[18px]'></textarea>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between w-full items-start md:items-center gap-[16px] md:gap-0 mt-[10px] md:mt-0'>
          <label htmlFor="" className='flex gap-[10px] items-center'>
            <input type="checkbox" />
            <p className='text-[rgba(153,153,153,1)] text-[14px] md:text-[18px]'>I agree with Terms of Use and Privacy Policy</p>
          </label>
          <button className='text-white bg-[rgba(229,0,0,1)] py-[12px] md:py-[14px] px-[20px] md:px-[24px] text-[16px] md:text-[18px] font-semibold rounded-[9px] w-full md:w-auto'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Header