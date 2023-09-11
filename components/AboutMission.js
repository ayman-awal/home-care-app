import React from 'react'

const AboutMission = () => {
  return (
    <div className='mission-container'>
        <div className='our-mission-container'>
            <div className='our-mission'>
                <div className='mission-img-container'>
                    <img className='img-border' src='images/about/hug.jpeg' alt='patient with nurse'/>
                </div>

                <div>
                    <h4>Our Mission</h4>
                    <h3>Best place and room with high tech facilities</h3>
                    <p>Our goal at MiHomeCare is to enable every person in our care to live 
                    with dignity, comfort, and independence in the comfort of their own home. 
                    This goal is both obvious and unshakable. We are fully committed to providing 
                    each customer with individualized home care services that are unmatched in the 
                    industry. Every moment spent at home should be filled with happiness, safety, 
                    and the greatest possible standard of living, thanks to the hard work of our 
                    devoted team of specialists, who are on call day and night. We are improving lives, 
                    one household at a time, by supporting a model of care that puts an emphasis on compassion, 
                    dependability, and trustworthiness.</p>

                    <div className='contact-info'>
                        <div>
                            <a href="tel:+15862767347">
                                <img src='/images/about/phone-icon.svg' alt='phone icon'/>
                                <p>+1 (586) 276-7347</p>
                            </a>
                        </div>

                        {/* <div>
                            <img src='/images/about/mail-icon.svg' alt='mail icon' />
                            example@email.com
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMission