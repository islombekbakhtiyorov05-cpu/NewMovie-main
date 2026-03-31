import React, { useEffect, useState } from 'react'
import Banner from '../Components/Main/Banner'
import Footer from '../Components/Main/Footer'
import Navbar2 from '../Components/Main/Navbar2'
import Api_Service from '../Components/Service/Api_Service'
import { useNavigate } from 'react-router-dom'

const Searching = () => {
  const navigate = useNavigate() 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [query, setQuery] = useState('')
  const [active, setActive] = useState('multi')
  const [datas, setDatas] = useState()
  const categories = ['Movies', 'TV Series', 'Actors', 'All']
  const categoryMap = {
    'All': 'multi',
    'Movies': 'movie',
    'Actors': 'person',
    'TV Series': 'tv'
  }

  const ChangeCateg = (type) => {
    if (type == 'All') setActive('multi')
    if (type == 'Movies') setActive('movie')
    if (type == 'Actors') setActive('person')
    if (type == 'TV Series') setActive('tv')
  }

  const handleSearch = async () => {
    const responce = await Api_Service.getData(`search/${active}?query=${query}`)
    const normalized = responce.results.map((item) => ({
      ...item,
      name: item.title ?? item.name ?? '',
      img: item.backdrop_path ?? item.profile_path ?? '',
      media_type: item.media_type ?? active
    }))
    setDatas(normalized)
  }
  console.log(datas);

  const handleOpen = (item) => {
    if (item.media_type === 'person') {
      navigate(`/actor_info/${item.id}`)
    } else if (item.media_type === 'tv') {
      navigate(`/tv/${item.id}`)
    } else {
      navigate(`/movie/${item.id}`)
    }
  }

  return (
    <div>
      <Navbar2 />
      <div className='bg-[#0d0d0d] px-[20px] md:px-[80px] pb-[40px] pt-[40px] md:pt-[80px]'>

        <div className='flex gap-[10px]'>
          <input
            className='w-full bg-[#1a1a1a] border border-[#262626] rounded-[12px] px-[14px] md:px-[20px] py-[12px] md:py-[16px] text-white text-[14px] md:text-[16px] outline-none placeholder-[#666]'
            type="text"
            placeholder='Search for movies, TV shows, or actors...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className='bg-red-600 hover:bg-red-700 transition-all text-white px-[16px] md:px-[30px] py-[12px] md:py-[16px] rounded-[12px] font-semibold text-[14px] md:text-[16px]'
          >
            Search
          </button>
        </div>

        <div className='flex flex-wrap gap-[8px] md:gap-[10px] justify-center mt-[20px]'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => ChangeCateg(cat)}
              className={`px-[14px] md:px-[24px] py-[8px] md:py-[12px] rounded-[12px] text-white font-medium text-[12px] md:text-[14px] border border-[#262626] transition-all
              ${active === categoryMap[cat] ? 'bg-red-600 border-red-600' : 'bg-[#1a1a1a] hover:bg-[#262626]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='flex flex-col gap-4 md:gap-6 mt-[40px]'>
          {datas && datas.map((item) => (
            <div key={item.id} onClick={() => handleOpen(item)} className='w-full h-auto md:h-[200px] flex gap-[16px] md:gap-[40px] items-center cursor-pointer'>
              <img className='w-[120px] md:w-auto h-[120px] md:h-[200px] rounded-2xl flex-shrink-0 object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt="" />
              <div>
                <h1 className='text-white text-[18px] md:text-[28px] font-semibold'>{item.name}</h1>
                <h2 className='text-[rgba(153,153,153,1)] text-[14px] md:text-[20px]'>{item.release_date?.slice(0, 4)}</h2>
                <p className='text-white text-[14px] md:text-[20px] line-clamp-3 md:line-clamp-none'>{item.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export default Searching