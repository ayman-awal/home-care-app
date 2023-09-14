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
    const reviews = [
        {name: 'SK Uddin', desc: "MI Care Provider has made a world of difference in my grandfather's life. The personalized attention and 24/7 assistance ensure that he's always safe and comfortable."},
        {name: 'Maria Hassan', desc:  "The medication management system is truly a game-changer! I no longer worry about my dad missing his meds. Thanks to MI Care Provider's innovative app."},
        {name: 'দোলন খন্দকার', desc:  "MI Care Provider আমার মায়ের জীবনে একটি আশীর্বাদ। তারা আমার মাকে তার প্রয়োজনীয় সমস্ত যত্ন প্রদান করে এবং তাকে তার বাড়িতে আরামদায়ক এবং নিরাপদ বোধ করতে সাহায্য করে।"},
        {name: 'Rakibur Rahman', desc:  "Every care provider from MI Care Provider has been compassionate, dependable, and professional. Knowing that my mother is in good hands gives me peace of mind."},
        {name: 'Rafsan Ahmed', desc:  "The holistic well-being approach is exceptional. It's not just about health; it's about ensuring happiness in every moment. MI Care Provider does just that!"},
        {name: 'আবু বকর', desc:  "MI Care Provider আমার মায়ের যত্ন নেওয়ায় আমি খুবই খুশি। তারা অত্যন্ত দক্ষ এবং সহায়ক। তাদের সাথে আমার মা খুব ভাল আছে। বাড়িতে তারা আমার মাকে আরামদায়ক এবং নিরাপদ বোধ করতে সাহায্য করছে।"},
        {name: 'Zarin Tasnim', desc:  "From meal prep to medication reminders, MI Care Provider has become integral to our family. Their comprehensive services are a blessing."},
        {name: 'Ramisa Hossain', desc:  "A friend recommended MI Care Provider, and it's the best decision we made for our grandmother. The tailored care services cater to her unique needs."},
        {name: 'Fariha Khan', desc:  "My sister, who's physically disabled, has seen a remarkable improvement in her daily life. All thanks to the reliable and trustworthy care provided by MI Care Provider."},
        {name: 'মিতুল দাস', desc:  "MI Care Provider আমার জীবনকে অনেক সহজ করে দিয়েছে। তারা আমার সমস্ত যত্ন নেয়, তাই আমি আমার খাবার দাবার ও সময় মতো ওষধ গ্রহণ করতে পারছি। তারা অত্যন্ত দক্ষ এবং পেশাদার। আমি তাদেরকে সত্যিই প্রশংসা করি।"},
        
    ]
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
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index} style={{ margin: '0px 10px' }}>
                            {
                                <ReviewComponent name={item.name} desc={item.desc}/>
                            }
                            </SwiperSlide>
                        ))}
                </Swiper>
                
            </div>
                     
        </div>
    </div>
  )
}
