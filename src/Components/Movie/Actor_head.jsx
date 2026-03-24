import React from 'react'

const Actor_head = () => {
  return (
    <div className='px-[80px] py-[60px] bg-[#0d0d0d] flex justify-between gap-[100px]'>

  <img className='w-[300px] h-[450px] object-cover rounded-[12px]' src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1151380190.jpg?crop=1xw:1.0xh;center,top&resize=640:*" alt="" />
<div className='h-auto w-full'>
<h1 className='text-white text-[32px] font-bold'>Brian Cranston</h1>
<h2 className='text-[rgba(153,153,153,1)] text-[18px] mt-[20px]'>Biography</h2>
<p className='text-[18px] text-white leading-[150%] mt-[10px]'>Bryan Lee Cranston (born March 7, 1956) is an American actor. He established himself as a leading actor in both comedic and dramatic works on stage and screen. His accolades include seven Primetime Emmy Awards, two Tony Awards, a Laurence Olivier Award, and a Golden Globe Award, as well as nominations for an Academy Award and a British Academy Film Award.</p>
</div>
    </div>
  )
}

export default Actor_head