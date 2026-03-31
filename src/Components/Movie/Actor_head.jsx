import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api_Service from '../Service/Api_Service'

const Actor_head = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()
  const [actor, setActor] = useState()

  const getActor = async () => {
    const responce = await Api_Service.getData(`person/${id}`)
    console.log(responce)
    setActor(responce)
  }

  useEffect(() => {
    getActor()
  }, [])

  return (
    <div className='px-[20px] md:px-[80px] py-[30px] md:py-[60px] bg-[#0d0d0d] flex flex-col md:flex-row justify-between gap-[30px] md:gap-[100px]'>

      <img className='w-full md:w-[300px] h-[300px] md:h-[450px] object-cover rounded-[12px] flex-shrink-0' src={`https://image.tmdb.org/t/p/w500${actor?.profile_path}`} alt="" />

      <div className='h-auto w-full'>
        <h1 className='text-white text-[24px] md:text-[32px] font-bold'>{actor?.name}</h1>
        <h2 className='text-[rgba(153,153,153,1)] text-[16px] md:text-[18px] mt-[16px] md:mt-[20px]'>Biography</h2>
        <p className='text-[16px] md:text-[18px] text-white leading-[150%] mt-[8px] md:mt-[10px]'>{actor?.biography}</p>
      </div>

    </div>
  )
}

export default Actor_head