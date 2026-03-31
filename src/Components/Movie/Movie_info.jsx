import React from 'react'

const Movie_info = ({Movie, Crew, Languages, Genres}) => {
  
  return (
    <div className="bg-[rgba(26,26,26,1)] p-[20px] md:p-[40px] rounded-[9px] w-full flex flex-col gap-[20px] md:gap-[30px]">
      <div className="flex flex-col gap-[14px]">
        <p className="text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] font-medium">Released Year</p>
        <h1 className='text-white text-[18px] md:text-[20px] font-semibold'>{Movie?.release_date}</h1>
      </div>
      <div className="flex flex-col gap-[14px]">
        <p className="text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] font-medium">Available Languages</p>
        <div className='flex flex-wrap gap-[10px]'>
          {Languages && Languages.map((lang) => (
            <div key={lang?.name} className="text-white text-[14px] md:text-[16px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">{lang.english_name}</div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] font-medium">Ratings</p>
        <div className='md:flex gap-[10px] mt-[10px] w-[100%]'>
          <div className=' rounded-[9px] p-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] w-[60%] md:w-[50%]'>
            <h1 className='text-[16px] md:text-[18px] text-white'>IMDb</h1>
            <div className='flex w-[100%] pr-[10px] gap-[10px] items-center text-[16px] md:text-[18px] text-[rgba(153,153,153,1)]'><img src="/public/Container.png" alt="" /> 4.5</div>
          </div>
          <div className='rounded-[9px] p-[10px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] w-[60%] md:w-[50%] '>
            <h1 className='text-[16px] md:text-[18px] text-white'>StreamVibe</h1>
            <div className='flex gap-[10px] items-center text-[16px] md:text-[18px] text-[rgba(153,153,153,1)]'><img src="/public/Container.png" alt="" /> 4.5</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px]">
        <p className="text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] font-medium">Genres</p>
        <div className='flex flex-wrap gap-[10px]'>
          {Genres && Genres.map((gen) => (
            <div key={gen?.id} className="text-white text-[14px] md:text-[16px] bg-[rgba(20,20,20,1)] border-[1px] border-[rgba(38,38,38,1)] px-[14px] inline py-[8px] rounded-[9px]">{gen?.name}</div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] font-medium">Director</p>
        <div className='flex gap-[10px] mt-[14px]'>
          <div className='w-[48px] md:w-[56px] h-[52px] md:h-[60px] flex-shrink-0'><img className='w-full object-cover object-center h-full rounded-[9px]' src={`https://image.tmdb.org/t/p/w500/` + Crew?.find((c) => c.job==="Director").profile_path} alt="" /></div>
          <div>
            <h1 className='text-[18px] md:text-[20px] text-white'>{Crew?.find((c) => c.job === "Director").name}</h1>
            <p className='text-[16px] md:text-[18px] text-[rgba(153,153,153,1)]'>From USA</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[16px] md:text-[18px] text-[rgba(153,153,153,1)] font-medium">Producer</p>
        <div className='flex gap-[10px] mt-[14px]'>
          <div className='w-[48px] md:w-[56px] h-[52px] md:h-[60px] flex-shrink-0'><img className='w-full object-cover object-center h-full rounded-[9px]' src={`https://image.tmdb.org/t/p/w500/` + Crew?.find((c) => c.job==="Producer").profile_path} alt="" /></div>
          <div>
            <h1 className='text-[18px] md:text-[20px] text-white'>{Crew?.find((c) => c.job === "Producer")?.name}</h1>
            <p className='text-[16px] md:text-[18px] text-[rgba(153,153,153,1)]'>From USA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie_info