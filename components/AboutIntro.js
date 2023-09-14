import React from 'react'

export const AboutIntro = () => {
  return (
    <>
        
    <div className='about-container' style={{backgroundColor:'#D9E9E4'}}>
            <div className='our-mission-container'>
                <div className='about-us'>
                    <div>
                        <h4>About Us</h4>
                        <h3>We want to be your seniors fulcrum</h3>
                        <p>MI Care Provider serves two primary groups: senior citizens aged 60 and above, 
                        and immigrants facing unique challenges. For seniors, we offer compassionate assistance 
                        aimed at preserving their independence and well-being in the familiar setting of their homes. 
                        Our dedicated caregivers cater to their specific needs, ensuring they can enjoy a high quality 
                        of life as they age.</p>
                        <div className='float-container'>
                            <img src='/images/about/docnewspaper.jpeg' alt='' className='img-border img-float'/>
                        </div>
                        <p>In addition, we extend our services to immigrants navigating the complexities of a new country 
                        and culture while coping with health issues or disabilities. We recognize the importance of culturally 
                        sensitive care, providing support that makes them feel understood and valued. Our commitment extends to 
                        individuals of all ages who require assistance with health challenges, immobility, or daily tasks like 
                        medication management and personal hygiene. MI Home Care Provider strives to offer personalized care and 
                        companionship, ensuring that everyone, regardless of age or background, can lead fulfilling lives with the
                         help they need.</p>
                        <div className='info-card-bottom'>
                            <p><a href='/contact'>Contact Us <img src='images/p2p/arrow.svg' alt='arrow' /></a></p>
                        </div>
                    </div>
                    <div className='about-img-container'>
                        <img src='/images/about/hands.jpeg' alt='' className='img-border'/>
                    </div>
                </div>
               
            </div>
    </div>
    </>
  )
}
