
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';



const Slider = () => {
    
    const data = [
        {
            id:"1",
            img:"https://m.media-amazon.com/images/M/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            title:"Bullet Train" 
        },
        {
            id:"2",
            img:"https://m.media-amazon.com/images/M/MV5BODcyMDA5OGQtNTExYi00OGIwLWIyYWUtNWFlZDg0MTMyYmE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            title:"Nice Guys" 
        },
        {
            id:"3",
            img:"https://m.media-amazon.com/images/I/71QPnEkXygS._AC_UF894,1000_QL80_.jpg",
            title:"Fight Club" 
        },
        {
            id:"4",
            img:"https://m.media-amazon.com/images/I/71VOi4imL3L._AC_UF1000,1000_QL80_.jpg",
            title:"Inglorious Basterds" 
        },
    {
        id:"5",
            img:"https://www.tallengestore.com/cdn/shop/products/BreakingBad-BryanCranston-WalterWhite-TVShowArtPoster7_f853907b-b6d0-4c5b-ac36-8e8b0b837737.jpg?v=1683604387",
            title:"Breaking Bad" 
        },
        {
            id:"6",
            img:"https://i.ebayimg.com/images/g/VYgAAOSwTzNkMFso/s-l1200.jpg",
            title:"Django Unchained" 
        }
    ]


  return (
    
    <div className='px-[80px] bg-black py-[60px] '>
        <div className='w-[80%]'>
            <h1 className='text-[28px] font-bold text-white'>Explore our wide variety of categories</h1>
            <p className='text-[14px] font-regular text-[rgba(153,153,153,1)]'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
        </div>
        <button className='prev-btn '>
    <ArrowLeft color='white'/>
</button>
<button className='next-btn'>
    <ArrowRight color='white'/>
</button>
        <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation ]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}        
        className="mySwiper mt-[50px]"
      >
        
        
        {data && data.map((item) => (
         <SwiperSlide>
            <div>
                <div className='h-[350px]'><img className='object-cover w-[100%] h-[100%]' src={item.img} alt="" /></div>
                <h1 className='text-[20px] mt-[20px] text-white'>{item.title}</h1>
            </div>
         </SwiperSlide>
         
))}
         
      </Swiper>

    </div>
  )
}

export default Slider