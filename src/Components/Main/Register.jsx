import React, { useState } from 'react'

const Register = () => {

  const [haveAnEmail, setHaveAnEmail] = useState(false);

  return (
    <div className='bg-[#0d0d0d] px-[80px] pt-[40px] pb-[70px]'>
      <div className='p-[40px] bg-black rounded-[9px] border-[2px] border-[rgba(38,38,38,1)] flex justify-between'>
        <div className='w-[400px] h-[450px]'>
          <img className='w-[100%] h-[100%] object-cover rounded-[9px]' src="/public/Sub Container.png" alt="" />
        </div>
        {haveAnEmail ? (
<div className='flex flex-col  w-full max-w-[700px] gap-[15px] '>
  <div>
            <label htmlFor="nickname" className='text-[white] text-[20px] font-medium'>Nickname</label>
            <input type="nickname" id='email' placeholder='Nickname' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]' />
          </div>
          <div>
            <label htmlFor="email" className='text-[white] text-[20px] font-medium'>Email</label>
            <input type="email" id='password' placeholder='example@email.com' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]' />
          </div>
              <div>
            <label htmlFor="password" className='text-[white] text-[20px] font-medium'>Password</label>
            <input type="password" id='password' placeholder='password' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]' />
          </div>
          <button className='text-[16px] text-white w-[100%] text-start p-[15px] bg-red-700 mt-[15px] rounded-[9px] font-medium'>Register</button>
          <button onClick={() => setHaveAnEmail(false)} className='text-[16px] text-[rgba(153,153,153,1)] cursor-pointer hover:text-red-700 font-medium'>Have an account?</button>
          <div className='flex gap-[15px]'>
            <button className='border-[1px] border-[rgba(38,38,38,1)] p-[15px] flex items-center gap-[5px] text-white text-[20px] rounded-[9px]'><img className='w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/devicon_google.svg" alt="" />Login with Google</button>
            <button className='border-[1px] border-[rgba(38,38,38,1)] p-[15px] flex items-center gap-[5px] text-white text-[20px] rounded-[9px]'><img className='w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/Vector%20(1).svg" alt="" />Login with Github</button>
          </div>
     
</div>
        ) : (        <div className='flex flex-col  w-full max-w-[700px] gap-[15px] '>
          <h1 className='text-[32px] text-white font-semibold w-[100%] text-center'>
            Please login to use our app
          </h1>
          <div>
            <label htmlFor="email" className='text-[white] text-[20px] font-medium'>Email</label>
            <input type="email" id='email' placeholder='example@email.com' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]' />
          </div>
          <div>
            <label htmlFor="password" className='text-[white] text-[20px] font-medium'>Email</label>
            <input type="email" id='password' placeholder='password' className='w-[100%] text-white bg-[rgba(20,20,20,1)] p-[15px] rounded-[9px] mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[18px]' />
          </div>
          <button className='text-[16px] text-white w-[100%] text-start p-[15px] bg-red-700 mt-[15px] rounded-[9px] font-medium'>Login</button>
          <button onClick={() => setHaveAnEmail(true)} className='text-[16px] text-[rgba(153,153,153,1)] cursor-pointer hover:text-red-700 font-medium'>Don't have an account?</button>
          <div className='flex gap-[15px]'>
            <button className='border-[1px] border-[rgba(38,38,38,1)] p-[15px] flex items-center gap-[5px] text-white text-[20px] rounded-[9px]'><img className='w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/devicon_google.svg" alt="" />Login with Google</button>
            <button className='border-[1px] border-[rgba(38,38,38,1)] p-[15px] flex items-center gap-[5px] text-white text-[20px] rounded-[9px]'><img className='w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/Vector%20(1).svg" alt="" />Login with Github</button>
          </div>
        </div>) }

      </div>
    </div>
  )
}

export default Register