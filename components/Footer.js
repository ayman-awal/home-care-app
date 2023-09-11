import React from 'react'


const Footer = () => {
  return (
    <div className='footer-layout'>
        <div className='footer-content'>
            <div className='footer-grid'>
                <div className='logo-col'>
                    <a href='/'><img src="/images/footer/white-logo.png" className='logo' alt="Logo"/></a>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa faucibus ut lobortis 
                    sagittis purus neque urna. Scelerisque enim magna hac aliquet ut. Volutpat 
                    morbi facilisis sit et cursus at dictumst hac In.</p>
                </div>
                <div className='quick-links'>
                    <ul>
                        <li className='first-li'>Quick Links</li>
                        <a href='/'><li>Home</li></a>
                        <a href='/about'><li>About Us</li></a>
                        {/* <li>Our Services</li> */}
                        {/* <li>Testimonials</li> */}
                        <a href='/contact'><li>Contact Us</li></a>
                        {/* <li>Career</li> */}
                        <li>FAQs</li>
                    </ul>
                </div>
                {/* <div>
                    <ul>
                        <li className='first-li'>Explore Our Services</li>
                        <li>Personal Care</li>
                        <li>Medication Management</li>
                        <li>Companionship</li>
                        <li>Meal Preparation</li>
                        <li>Housekeeping</li>
                        <li>Transportation</li>
                    </ul>
                </div> */}
                <div>
                    <ul>
                        <li className='first-li'>Call Us</li>
                        <a href="tel:+15862767347">
                            <li style={{textDecoration: 'underline', fontSize: '17px', fontWeight:'bold'}}>+1 (586) 276-7347</li>
                        </a>
                    </ul>
                    <ul className='follow-us'>
                        <li className='first-li'>Follow Us</li>
                        <li><img src='/images/footer/facebook.svg' height={30} width={30} alt=''/></li>
                        <li><img src='/images/footer/instagram.svg' height={30} width={30} alt=''/></li>
                        {/* <li><img src='/images/footer/youtube.svg' height={30} width={30} alt=''/></li> */}
                        <li><img src='/images/footer/linkedin.svg' height={30} width={30} alt=''/></li>
                        <li><img src='/images/footer/whatsapp.svg' height={30} width={30} alt=''/></li>
                    </ul> 
                </div>
            </div>
            <div className='copyright'>
                Copyright 2023 MiHomeCare Inc. All Right Reserved
            </div>
        </div>
        
        
        
    </div>
    

  )
}

export default Footer;


