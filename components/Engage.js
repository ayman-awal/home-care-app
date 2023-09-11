import React from 'react'

export const Engage = () => {
  return (
    <div className='engage-container'>
        <div className='engage-content'>
            <h3>MiHomeCare: Elevating Senior Care with Personalized In-Home Services</h3>
            <div className='p-div'>
                <p>Our dedicated homecare service for elderly individuals prioritizes comfort, 
                companionship, and wellness. Explore how MiHomeCare&apos;s experienced caregivers and 
                tailored programs redefine elderly care, promoting independence and well-being in 
                the golden years</p>
            </div>

            <div className='engage-components'>
                {/* <div className='hero-search-container'>
                    <div className='zip-input'>
                        <input placeholder='Enter Michigan zip code where care is needed...' type="text" />
                    </div>
                    <div className='search-icon'>
                        <img src='images/hero/searchicon.svg' alt='search-icon'/>
                    </div>
                </div> */}
                <div className='call-us-button'>
                    <div>
                        <a href="tel:+15862767347"><p>Call Us Now</p></a>
                    </div>
                </div>
            </div>
            
            
        </div>

    </div>
  )
}
