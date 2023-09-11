import React from 'react'

const AboutTeam = () => {
  return (
    <div style={{backgroundColor:'#D9E9E4'}}>
        <div className='our-team-container'>
            <div className='our-team'>
                <div>
                    <h4>Our Team</h4>
                    <h3>Our people with responsible and service oriented qualities</h3>
                    <p className='our-team-p'>Lorem ipsum dolor sit amet consectetur. Quis interdum lorem fames 
                    sed elit amet tortor duis. Pretium cras mattis egestas nulla pulvinar 
                    quisque ut pellentesque quis. Semper enim tincidunt vitae quis odio.</p>
                
                    <div className='call-us-button'>
                        <a href="tel:+15862767347">
                            <p>Contact Team</p>
                        </a>
                    </div>
                </div>

                <div className='team-images'>
                    <img src='/images/about/teamicons.png'/>
                    {/* <img src='/images/about/member1.png' alt=''/>
                    <img src='/images/about/member2.png' alt=''/>
                    <img src='/images/about/member3.png' alt=''/>
                    <img src='/images/about/member4.png' alt=''/>
                    <img src='/images/about/member5.png' alt=''/> */}

                </div>
            </div> 
            
        </div>
        
    </div>
  )
}

export default AboutTeam;