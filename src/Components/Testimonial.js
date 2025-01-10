import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Testimonial() {
  return (
    <>
    <div className='TestimonialHeading'>
        <h1>Testimonial</h1>
        <p>My client saying</p>
    </div>
    
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='testimonialcard'>
            <img className='testimg1 mx-4 mb-4 mt-2' src={require('../Assets/testimonial1pic.jpg')} alt="Testimonial from John Doe" />
                <h5 className='mx-4'>Jhon doe</h5>
                <p className='mx-4'>A really good job,all aspects of the project were followed step by step and with good results.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialcard'>
            <img className='testimg1 mx-4 mb-4 mt-2' src={require('../Assets/testimonial1pic.jpg' )} alt="Testimonial from John Doe" />
                <h5 className='mx-4'>Mark Wood</h5>
                <p className='mx-4'>A really good job,all aspects of the project were followed step by step and with good results.</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialcard'>
             <img className='testimg2 mx-4 mb-4 mt-2' src={require('../Assets/testimonial3pic.jpg')} alt="Testimonial from John Doe" />
                <h5 className='mx-4'>Sara Cill</h5>
                <p className='mx-4'>A really good job,all aspects of the project were followed step by step and with good results.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialcard'>
        <img className='testimg2 mx-4 mb-4 mt-2' src={require('../Assets/testimonial3pic.jpg')} alt="Testimonial from John Doe" />

                <h5 className='mx-4'>Sansa</h5>
                <p className='mx-4'>A really good job,all aspects of the project were followed step by step and with good results.</p>
            </div>
        </SwiperSlide>
        
      </Swiper>

    
    </>
  )
}

export default Testimonial
