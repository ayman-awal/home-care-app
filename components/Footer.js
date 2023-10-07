import React from 'react'


const Footer = () => {
  return (
    <div className='footer-layout'>
        <div className='footer-content'>
            <div className='footer-grid'>
                <div className='logo-col'>
                    <a href='/'><img src="/images/footer/micareprovider.png" className='logo' alt="Logo"/></a>
                    <p>Mi Care Provider is not just a service; it's a commitment. We are here to ensure that 
                    every individual under our care lives their best life in the comfort of their home. 
                    Join us in our mission to bring happiness, safety, and a high standard of living to every home.</p>
                </div>
                <div className='quick-links'>
                    <ul>
                        <li className='first-li'>Quick Links</li>
                        <a href='/'><li>Home</li></a>
                        <a href='/about'><li>About Us</li></a>
                        {/* <li>Our Services</li> */}
                        {/* <li>Testimonials</li> */}
                        <a href='/contact'><li>Contact Us</li></a>
                        <a href='/forms'><li>Forms</li></a>
                        <a href='/privacy-policy'><li>Privacy Policy</li></a>
                        <a href='/terms-and-conditions'><li>Terms & Conditions</li></a>
                        {/* <li>Career</li> */}
                        {/* <li>FAQs</li> */}
                    </ul>
                </div>
            
                <div>
                    <ul>
                        <li className='first-li'>Call Us</li>
                        <a href="tel:+15862767347">
                            <li style={{textDecoration: 'underline', fontSize: '17px', fontWeight:'bold'}}>+1 (586) 276-7347</li>
                        </a>
                    </ul>
                    <ul className='follow-us'>
                        <li className='first-li'>Follow Us</li>
                        <a href='https://www.facebook.com/mihomecare.us' target='_blank'><li><img src='/images/footer/facebook.svg' height={30} width={30} alt=''/></li></a>
                        {/* <li><img src='/images/footer/instagram.svg' height={30} width={30} alt=''/></li> */}
                        {/* <li><img src='/images/footer/youtube.svg' height={30} width={30} alt=''/></li> */}
                        {/* <li><img src='/images/footer/whatsapp.svg' height={30} width={30} alt=''/></li> */}
                    </ul> 
                </div>
            </div>
            <div className='copyright'>
                Copyright 2023 MI Care Provider LLC. All Right Reserved
            </div>
        </div>
        
        
        
    </div>
    

  )
}

export default Footer;


