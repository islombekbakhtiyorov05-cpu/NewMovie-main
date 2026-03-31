import React, { useState } from 'react'

const Register = () => {
  const [haveAnEmail, setHaveAnEmail] = useState(false);

  const inputClass = 'w-full text-white bg-[rgba(20,20,20,1)] p-[12px] md:p-[15px] rounded-[9px] mt-[8px] md:mt-[10px] border-[1px] border-[rgba(38,38,38,1)] placeholder:text-[rgba(153,153,153,1)] text-[16px] md:text-[18px]'
  const labelClass = 'text-white text-[16px] md:text-[20px] font-medium'
  const socialBtn = 'border-[1px] border-[rgba(38,38,38,1)] p-[10px] md:p-[15px] flex items-center gap-[5px] text-white text-[14px] md:text-[20px] rounded-[9px] flex-1 justify-center'

  return (
    <div className='bg-[#0d0d0d] px-[16px] md:px-[80px] pt-[24px] md:pt-[40px] pb-[40px] md:pb-[70px]'>
      <div className='p-[20px] md:p-[40px] bg-black rounded-[9px] border-[2px] border-[rgba(38,38,38,1)] flex flex-col md:flex-row justify-between gap-[30px] md:gap-[60px]'>
        
        {/* Картинка — скрыта на мобиле */}
        <div className='hidden md:block w-[400px] h-[450px] flex-shrink-0'>
          <img className='w-full h-full object-cover rounded-[9px]' src="/public/Sub Container.png" alt="" />
        </div>

        {haveAnEmail ? (
          <div className='flex flex-col w-full max-w-[700px] gap-[12px] md:gap-[15px]'>
            <h1 className='text-[24px] md:text-[32px] text-white font-semibold text-center'>Create an account</h1>
            <div>
              <label className={labelClass}>Nickname</label>
              <input type="text" placeholder='Nickname' className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" placeholder='example@email.com' className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Password</label>
              <input type="password" placeholder='password' className={inputClass} />
            </div>
            <button className='text-[16px] text-white w-full p-[13px] md:p-[15px] bg-red-700 mt-[10px] md:mt-[15px] rounded-[9px] font-medium'>
              Register
            </button>
            <button onClick={() => setHaveAnEmail(false)} className='text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] cursor-pointer hover:text-red-700 font-medium'>
              Have an account?
            </button>
            <div className='flex gap-[10px] md:gap-[15px]'>
              <button className={socialBtn}>
                <img className='w-[20px] md:w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/devicon_google.svg" alt="" />
                <span className='hidden sm:inline'>Login with Google</span>
                <span className='sm:hidden'>Google</span>
              </button>
              <button className={socialBtn}>
                <img className='w-[20px] md:w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/Vector%20(1).svg" alt="" />
                <span className='hidden sm:inline'>Login with Github</span>
                <span className='sm:hidden'>Github</span>
              </button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col w-full max-w-[700px] gap-[12px] md:gap-[15px]'>
            <h1 className='text-[24px] md:text-[32px] text-white font-semibold w-full text-center'>
              Please login to use our app
            </h1>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" placeholder='example@email.com' className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Password</label>
              <input type="password" placeholder='password' className={inputClass} />
            </div>
            <button className='text-[16px] text-white w-full p-[13px] md:p-[15px] bg-red-700 mt-[10px] md:mt-[15px] rounded-[9px] font-medium'>
              Login
            </button>
            <button onClick={() => setHaveAnEmail(true)} className='text-[14px] md:text-[16px] text-[rgba(153,153,153,1)] cursor-pointer hover:text-red-700 font-medium'>
              Don't have an account?
            </button>
            <div className='flex gap-[10px] md:gap-[15px]'>
              <button className={socialBtn}>
                <img className='w-[20px] md:w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/devicon_google.svg" alt="" />
                <span className='hidden sm:inline'>Login with Google</span>
                <span className='sm:hidden'>Google</span>
              </button>
              <button className={socialBtn}>
                <img className='w-[20px] md:w-[25px]' src="https://website-movie-eight.vercel.app/images/svg/login/Vector%20(1).svg" alt="" />
                <span className='hidden sm:inline'>Login with Github</span>
                <span className='sm:hidden'>Github</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Register