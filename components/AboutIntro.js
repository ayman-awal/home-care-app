import React from 'react'

export const AboutIntro = () => {
  return (
    <div className='about-container' style={{backgroundColor:'#D9E9E4'}}>
            <div className='our-mission-container'>
                <div className='about-us'>
                    <div>
                        <h4>About Us</h4>
                        <h3>We want to be your seniors fulcrum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Et ipsum habitant enim sit nisi lectus. 
                        Quis eget a amet duis. Arcu viverra volutpat aliquam ipsum ultrices id lorem non netus. 
                        A massa eget adipiscing amet nisl lobortis urna sit. Accumsan fermentum duis nulla fermentum 
                        tortor et enim sed neque. Non faucibus arcu lacus blandit sociis.</p>
                        <div className='float-container'>
                            <img src='/images/about/docnewspaper.jpeg' alt='' className='img-border img-float'/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Et ipsum habitant enim sit nisi lectus. Quis eget 
                        a amet duis. Arcu viverra volutpat aliquam ipsum ultrices id lorem non netus. A massa eget adipiscing 
                        amet nisl lobortis urna sit. Accumsan fermentum duis nulla fermentum tortor et enim sed neque. Non faucibus 
                        arcu lacus blandit sociis.</p>
                        <div className='info-card-bottom'>
                            <p><a href='/contact'>Contact Us <img src='images/p2p/arrow.svg' alt='arrow' /></a></p>
                        </div>
                    </div>
                    <div className='mission-img-container'>
                        <img src='/images/about/hands.jpeg' alt='' className='img-border'/>
                    </div>
                </div>
               
            </div>
    </div>
  )
}
