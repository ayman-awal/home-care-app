import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode,Autoplay } from "swiper";
import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, FreeMode, Autoplay]);
import { ReviewComponent } from './ReviewComponent'

export const Reviews = () => {
    const items = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='reviews-container'>
        <div className='reviews'>
            <h3>Our Reviews</h3>
            <div className='slideshow-wrapper'>
                <Swiper
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    modules={[Pagination]}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoHeight={true}
                    breakpoints={{
                        1000:{
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        100: {
                            slidesPerView: 1,
                        },

                    }}
                >
                        {items.map((item, index) => (
                            <SwiperSlide key={index} style={{ margin: '0px 10px' }}>
                            {
                                <ReviewComponent />
                            }
                            </SwiperSlide>
                        ))}
                </Swiper>
                
            </div>
                     
        </div>
    </div>
  )
}
