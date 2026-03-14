import { Bell, Search } from 'lucide-react'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Navbar = () => {
    return (

        <div className='relative flex bg-linear-to-b from-[#000000] to-[rgba(0,0,0,0.8)]'>
            <nav className='flex px-[80px] justify-between py-[20px] w-full items-center'>
                <div><a className='bg-transparent' href="/"><img src="/Logo (1).png" alt="" /></a></div>
               <ul className='flex px-[5px] py-[13px] bg-black items-center justify-between rounded-[9px] gap-[10px] '>
                <li><a className='text-[rgba(191,191,191,1)] text-[14px] font-regular p-[10px] hover:bg-[rgba(26,26,26,1)] rounded-[9px]' href="">Home</a></li>
                <li><a className='text-[rgba(191,191,191,1)] text-[14px] font-regular p-[10px] hover:bg-[rgba(26,26,26,1)] rounded-[9px]' href="">Movies & Shows</a></li>
                <li><a className='text-[rgba(191,191,191,1)] text-[14px] font-regular p-[10px] hover:bg-[rgba(26,26,26,1)] rounded-[9px]' href="">Support</a></li>
                <li><a className='text-[rgba(191,191,191,1)] text-[14px] font-regular p-[10px] hover:bg-[rgba(26,26,26,1)] rounded-[9px]' href="">Subscriptions</a></li>
               </ul>
               <div className='flex gap-[10px]'>
                <Search color='white'/>
                <Bell color="#ffffff" />
               </div>
            </nav>
             <div className='absolute z-[-1] px-7    '>
                    <Marquee><img src="/public/Image Container.png" alt="" /></Marquee>
                    <Marquee type='boolean' direction='right' className='boolean'  ><img src="/Image Container (1).png" alt="" /></Marquee>
                    <Marquee type='boolean'><img src="/Image Container (3).png" alt="" /></Marquee>
                    <Marquee type='boolean' direction='right' className='boolean'  ><img src="/Image Container (4).png" alt="" /></Marquee>
                </div>
            
        </div>

    )
}

export default Navbar