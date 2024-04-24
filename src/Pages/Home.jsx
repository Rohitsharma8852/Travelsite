import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from './Navbar';
import Places from './Places';
import Bloge from './Bloge';
import Testimonial from './Testimonial';
import Footer from './Footer';


function Home() {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar/>

     <Slider {...settings}>
     <div className='container mx-auto mt-[100px]'>
        <div className='relative'>
             <img src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-banner-image-best-places-for-solo-travel-in-india.jpg" alt="" />
      </div>
          <div className='absolute top-[170px] md:w-[500px] md:block hidden md:ml-10 text-white text-[20px] lg:text-[23px]'>
             <p>Making Memories Everyday; Discovering Mermaids; Discovering Haunted Spots; Running Out of Locations; Travelling With Snacks; Discovering Adventure Ideas ...</p>
             <p className='mt-[30px] lg:block hidden'>Happiness Is Traveling. You'll be happy to be back. Collect Moment. Exploring The World In Comfort. Beauty, Charm, And Adventure.</p>
            </div>  
      </div>

      <div className='container mx-auto mt-[100px]'>
        <div className='relative'>
             <img src="https://watermark.lovepik.com/photo/50058/1781.jpg_wh1200.jpg" width={1260} className='lg:h-[450px] md:h-[280px] h-[180px]' alt="" />
         </div>
      </div>

      <div className='container mx-auto mt-[100px]'>
        <div className='relative'>
             <img src="https://wallpapers.com/images/hd/travel-hd-axhrsecphqby11wk.jpg" width={1260} className='lg:h-[450px] md:h-[280px] h-[180px]' alt="" />
      </div>
          
      </div>
     </Slider>

      <Places/>

      <div className='container mx-auto pl-[5px] pr-[5px]'>
           <img src="https://travel-tcj.netlify.app/assets/cover-women-kQ9VNO1p.jpg" alt="" />
      </div>

      <Bloge/>

      <div className='container mx-auto hover:rotate-4 transition-all'>
            <img src="https://travel-tcj.netlify.app/assets/travel-cover2-95LwdIub.jpg" alt="" />
      </div>

      <div className='container mx-auto mt-10'>
            <div className='text-center'>
                <p className='text-[#0287a8]'>Testimonial</p>
                <h1 className='md:text-3xl text-2xl font-bold mb-3'>Testimonial</h1>
                <p className='text-gray-400 md:text-[16px] text-[12px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt <br /> explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?</p>
            </div>
      </div>
 
         <Testimonial/>

         <Footer/>
    </>
  )
}

export default Home