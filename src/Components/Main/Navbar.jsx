import { Bell, Search, Menu, X } from 'lucide-react' // Добавил X для закрытия
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

const Navbar = () => {
    // 1. Создаем состояние для открытия/закрытия
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative flex flex-col bg-linear-to-b  from-[#000000] to-[rgba(0,0,0,0.8)]'>
            <nav className='flex px-[20px] md:px-[80px] justify-between py-[20px] w-full items-center z-50'>
                <div>
                    <a className='bg-transparent' href="/">
                        <img src="/Logo (1).png" alt="Logo" className='h-[24px] md:h-auto' />
                    </a>
                </div>

                {/* Desktop Menu (без изменений) */}
                <ul className='hidden md:flex px-[5px] py-[13px] bg-black items-center justify-between rounded-[9px] gap-[10px]'>
                    <li><a className='text-[rgba(191,191,191,1)] text-[14px] hover:bg-[rgba(26,26,26,1)] p-[10px] rounded-[9px]' href="">Home</a></li>
                    <li><a className='text-[rgba(191,191,191,1)] text-[14px] hover:bg-[rgba(26,26,26,1)] p-[10px] rounded-[9px]' href="">Movies & Shows</a></li>
                    <li><a className='text-[rgba(191,191,191,1)] text-[14px] hover:bg-[rgba(26,26,26,1)] p-[10px] rounded-[9px]' href="">Support</a></li>
                    <li><a className='text-[rgba(191,191,191,1)] text-[14px] hover:bg-[rgba(26,26,26,1)] p-[10px] rounded-[9px]' href="">Subscriptions</a></li>
                </ul>

                <div className='flex gap-[15px] items-center'>
                    <Search color='white' className='cursor-pointer' size={20} />
                    <Bell color="#ffffff" className='cursor-pointer' size={20} />
                    
                    {/* 2. Кнопка бургер (видна только на мобилках) */}
                    <button 
                        className='md:hidden text-white z-50' 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* 3. Мобильное меню (появляется только если isOpen === true) */}
                {isOpen && (
                    <div className='absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-start py-10 gap-6 md:hidden border-b border-white/10 shadow-2xl'>
                        <a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Home</a>
                        <a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Movies & Shows</a>
                        <a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Support</a>
                        <a className='text-white text-lg' href="" onClick={() => setIsOpen(false)}>Subscriptions</a>
                    </div>
                )}
            </nav>

            {/* Background Marquee (абсолютное позиционирование) */}
            <div className='absolute inset-0 z-[-1] h-[100vh] overflow-hidden opacity-40 md:opacity-100'>
                <Marquee><img src="/public/Image Container.png" alt="" /></Marquee>
                <Marquee direction='right'><img src="/Image Container (1).png" alt="" /></Marquee>
                <Marquee><img src="/Image Container (3).png" alt="" /></Marquee>
                <Marquee direction='right'><img src="/Image Container (4).png" alt="" /></Marquee>
            </div>
        </div>
    )
}

export default Navbar