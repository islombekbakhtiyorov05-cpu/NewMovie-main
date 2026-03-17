import React from 'react'

const Header = () => {
  return (
    <div className=' px-[20px] md:px-[80px] bg-[#0d0d0d] py-[20px] md:py-[60px]  w-[100%] md:flex md:justify-between'>
      <div className='w-[100%] md:w-[32%]'>
        <h1 className='text-[28px] md:text-[48px] font-bold text-white leading-[150%]'>Welcome to our support page!</h1>
        <p className='text-[18px] text-[rgba(153,153,153,1)] leading-[150%] mt-[20px]'>We're here to help you with any problems you may be having with our product.</p>
        <div className='mt-[20px]'>
          <img src="/public/Sub Container.png" alt="" />
        </div>
      </div>
      <div className='w-[100%] md:flex flex-wrap gap-[20px] md:w-[64%] bg-[#0b0b0b] p-[40px] rounded-[9px] border-[1px] border-[rgba(38,38,38,1)]'>
<div className='w-[100%] md:w-[48%] bg-red-400 flex flex-col h-[110px]'>
  <label htmlFor="firstName" className='text-white text-[18px] font-semibold'>First Name</label>
  <input id='firstName' type="text" placeholder='Enter Your First Name' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]'/> 
</div>
<div className='w-[100%] md:w-[48%] bg-red-400 flex flex-col h-[110px]'>
  <label htmlFor="firstName" className='text-white text-[18px] font-semibold'>First Name</label>
  <input id='firstName' type="text" placeholder='Enter Your First Name' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]'/> 
</div>
<div className='w-[100%] md:w-[48%] bg-red-400 flex flex-col h-[110px]'>
  <label htmlFor="firstName" className='text-white text-[18px] font-semibold'>First Name</label>
  <input id='firstName' type="text" placeholder='Enter Your First Name' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]'/> 
</div>
<div className='w-[100%] md:w-[48%] bg-red-400 flex flex-col h-[110px]'>
  <label htmlFor="firstName" className='text-white text-[18px] font-semibold'>First Name</label>
  <input id='firstName' type="text" placeholder='Enter Your First Name' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]'/> 
</div>
<div className='w-[100%] bg-red-400 flex flex-col '>
  <label htmlFor="message">Message</label>
  <textarea name="" id="message" placeholder='Enter Your Message' className='w-[100%] h-[150px] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]'></textarea>
  </div>
      </div>
    </div>
  )
}

export default Header