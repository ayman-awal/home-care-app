import React from 'react'

export const Passion2Purpose = () => {
  return (
    <div className='p2p-container'>
        <div>
            <h3>From passion to purpose</h3>

            <div className='flex-sect mb'>
                <div className='bgd-box red-bgd mr'>
                    {/* <img className='pic1' src='images/p2p/woman.jpeg' alt=''/>
                    <img className='pic2' src='images/p2p/manwheelchair.jpeg' alt=''/> */}
                    <img src='images/p2p/redsection.png' className='full-pic'/>
                </div>

                <div className='info-card'>
                    <h4>Who We Are</h4>
                    <p>
                    We are a team of compassionate, dedicated professionals who are trained to 
                    provide a range of home care services, from personal care and meal preparation 
                    to medication management- companionship, and many more. Our caregivers are carefully 
                    selected for their expertise, compassion, and uncompromisin...
                    </p>
                    <div className='info-card-bottom'>
                        <a href='/about'>Learn More <img src='images/p2p/arrow.svg' alt='arrow' /></a>
                    </div>
                </div>
            </div>

            <div className='flex-sect blue-bgd'>
                <div className='info-card'>
                    <h4>Our Mission</h4>
                    <p>
                    At MiHomeCare, our mission is to offer outstanding home care that enriches our clients' 
                    lives and assures their families. We focus on personalized and compassionate service, attending 
                    to both physical and emotional well-being. We're not just caregivers; we're a part of your family, 
                    dedicated to ensuring top-quality care in the comfort of home.
                    </p>
                    <div className='info-card-bottom'>
                        <a href='/contact'>Contact Us <img src='images/p2p/arrow.svg' alt='arrow' /></a>
                    </div>
                </div>
                <div className='bgd-box ml'>
                    {/* <img className='pic1' src='images/p2p/woman2.jpeg' alt='' />
                    <img className='pic2' src='images/p2p/elderlywoman.jpeg' alt='' /> */}
                    <img src='images/p2p/bluesection.png' className='full-pic'/>
                </div>

                
            </div>
        </div>
    </div>
  )
}
