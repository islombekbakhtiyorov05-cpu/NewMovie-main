import axios from 'axios'
import { Bell, Search, Menu, X,  } from 'lucide-react' // Добавил X для закрытия
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { NavLink, Link} from 'react-router-dom'
import Api_Service from '../Service/Api_Service'

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [staticMovies, setStaticMovies] = useState()  

    const getApi = async () => {
        const responce = await Api_Service.getData("trending/movie/day")
        setStaticMovies(responce.results)
        
    }
    
    

    useEffect(() => {
        getApi()
    }, [])

    return (
        <div className='relative flex flex-col bg-linear-to-b  from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.3)] pt-[10px] '>
            <nav className='flex px-[20px] md:px-[80px] justify-between py-[20px] w-full items-center z-20 fixed'>
                <div>
                    <a className='bg-transparent' href="/">
                        <img src="/Logo (1).png" alt="Logo" className='h-[34px] md:h-auto' />
                    </a>
                </div>

                {/* Desktop Menu (без изменений) */}
                <ul className='hidden md:flex px-[5px] py-[13px] bg-black items-center justify-between rounded-[9px] gap-[10px] border-[1px] border-[rgba(38,38,38,1)]'>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-[rgba(191,191,191,1)] text-[14px] bg-[#1a1a1a] p-[10px] rounded-[9px]"
                            : "text-[rgba(191,191,191,1)] text-[14px] p-[10px] rounded-[9px]"
                    }>Home</NavLink></li>
                    <li><NavLink to="/movies" className={({ isActive }) =>
                        isActive ? "text-[rgba(191,191,191,1)] text-[14px] bg-[#1a1a1a] p-[10px] rounded-[9px]"
                            : "text-[rgba(191,191,191,1)] text-[14px] p-[10px] rounded-[9px]"
                    }>Movies & Shows</NavLink></li>
                    <li><NavLink to="/support" className={({ isActive }) =>
                        isActive ? "text-[rgba(191,191,191,1)] text-[14px] bg-[#1a1a1a] p-[10px] rounded-[9px]"
                            : "text-[rgba(191,191,191,1)] text-[14px] p-[10px] rounded-[9px]"
                    }>Support</NavLink></li>
                    <li><NavLink to="/subscription" className={({ isActive }) =>
                        isActive ? "text-[rgba(191,191,191,1)] text-[14px] bg-[#1a1a1a] p-[10px] rounded-[9px]"
                            : "text-[rgba(191,191,191,1)] text-[14px] p-[10px] rounded-[9px]"
                    }>Subscription</NavLink></li>
                    <li><NavLink to="/register" className={({ isActive }) =>
                        isActive ? "text-[rgba(191,191,191,1)] text-[14px] bg-[#1a1a1a] p-[10px] rounded-[9px]"
                            : "text-[rgba(191,191,191,1)] text-[14px] p-[10px] rounded-[9px] bg-red-700"
                    }>Sign In</NavLink></li>
                </ul>

                <div className='flex gap-[15px] items-center'>
                   <Link to='/search'><Search color='white' className='cursor-pointer' size={20} /></Link>
                    <Bell color="#ffffff" className='cursor-pointer' size={20} />

                   
                    <button
                        className='md:hidden text-white z-50'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                
                {isOpen && (
                    <div className='absolute top-full left-0 w-full h-[90vh] px-[20px] bg-black/95 backdrop-blur-md flex flex-col items-start py-10 gap-6 md:hidden border-b border-white/10 shadow-2xl'>
                        <Link to="/"><a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Home</a></Link>
                       <Link to="/movies"><a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Movies & Shows</a></Link>
                        <Link to="/support"><a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Support</a></Link>
                        <Link to="/subscription"><a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Subscription</a></Link>
                        <Link to="/register"><a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Sign In</a></Link>
                    </div>
                )}
            </nav>

            <div className='absolute inset-0 z-[-1] h-[107vh] overflow-hidden opacity-40 md:opacity-100 bg-[#0d0d0d] '>
                <Marquee speed={40} gradient={false} direction='left'>
                    {staticMovies && staticMovies.map((m) => (
                        <img
                        key={`row1-${m.id}`}
                        src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                        className='h-54 mx-2 rounded-xl object-cover'
                        alt="poster" 
                        />
                    ))}
                </Marquee>
                <Marquee speed={50} gradient={false} direction='right'>
                    {staticMovies && staticMovies.map((m) => (
                        <img
                        key={`row2-${m.id}`}
                        src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                        className='h-54 mx-2 rounded-xl object-cover'
                        alt="poster" 
                        />
                    ))}
                    </Marquee>
                <Marquee speed={35} gradient={false} direction='left'>
                    {staticMovies && staticMovies.map((m) => (
                        <img
                        key={`row3-${m.id}`}
                        src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                        className='h-54 mx-2 rounded-xl object-cover'
                        alt="poster" 
                        />
                    ))}
                    </Marquee>
                     <Marquee speed={40} gradient={false} direction='right'>
                    {staticMovies && staticMovies.map((m) => (
                        <img
                        key={`row1-${m.id}`}
                        src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                        className='h-54 mx-2 rounded-xl object-cover'
                        alt="poster" 
                        />
                    ))}
                </Marquee>
                {/* <Marquee ><img src="/Image Container (1).png" alt="" /></Marquee> */}
            </div>
        </div>
    )
}

export default Navbar