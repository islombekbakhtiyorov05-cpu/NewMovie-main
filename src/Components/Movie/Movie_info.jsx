import React from 'react'

const Movie_info = () => {
  return (
    <div className="bg-[rgba(26,26,26,1)] p-[40px] rounded-[9px] w-[100%] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[14px]">
        <p className="text-[18px] text-[rgba(153,153,153,1)] font-medium">Released Year</p>
        <h1 className='text-white text-[20px] font-semibold'>2008</h1>
      </div>
      <div className="flex flex-col gap-[14px]">
        <p className="text-[18px] text-[rgba(153,153,153,1)] font-medium">Available Languages</p>
        <div className='flex flex-wrap gap-[10px]'>
          <div className="text-white bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">English</div>
          <div className="text-white bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">Uzbek</div>
          <div className="text-white bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">Russian</div>
          <div className="text-white bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">Indian</div>
        </div>
      </div>
      <div>
        <p className="text-[18px] text-[rgba(153,153,153,1)] font-medium">Ratings</p>
<div className='flex gap-[10px] mt-[10px]'>
          <div className='rounded-[9px] p-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] w-[50%]'>
          <h1 className='text-[18px] text-white'>IMDb</h1>
          <div className='flex gap-[10px] items-center text-[18px] text-[rgba(153,153,153,1)]'><img src="/public/Container.png" alt="" /> 4.5</div>
        </div>
                  <div className='rounded-[9px] p-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] w-[50%]'>
          <h1 className='text-[18px] text-white'>StreamVibe</h1>
          <div className='flex gap-[10px] items-center text-[18px] text-[rgba(153,153,153,1)] '><img src="/public/Container.png" alt="" /> 4.5</div>
        </div>
</div>
      </div>
      <div className="flex flex-col gap-[14px]">
        <p className="text-[18px] text-[rgba(153,153,153,1)] font-medium">Genres</p>
        <div className='flex flex-wrap gap-[10px]'>
          <div className="text-white bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">Drama</div>
          <div className="text-white bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">Crime</div>
        </div>
      </div>
      <div>
        <p className="text-[18px] text-[rgba(153,153,153,1)] font-medium" >Director</p>
        <div className='flex gap-[10px] mt-[14px]'>
          <div className='w-[56px] h-[60px]'><img className='w-full object-cover object-center h-full rounded-[9px]' src="https://ntvb.tmsimg.com/assets/assets/255299_v9_bc.jpg" alt="" /></div>
        <div>
          <h1 className='text-[20px] text-white'>Vince Gilligan</h1>
          <p className='text-[18px] text-[rgba(153,153,153,1)]'>From USA</p>
        </div>
        </div>
      </div>
      <div>
        <p className="text-[18px] text-[rgba(153,153,153,1)] font-medium" >Screenwriter</p>
        <div className='flex gap-[10px] mt-[14px]'>
          <div className='w-[56px] h-[60px]'><img className='w-full object-cover object-center h-full rounded-[9px]' src="https://ntvb.tmsimg.com/assets/assets/255299_v9_bc.jpg" alt="" /></div>
        <div>
          <h1 className='text-[20px] text-white'>Vince Gilligan</h1>
          <p className='text-[18px] text-[rgba(153,153,153,1)]'>From USA</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Movie_info