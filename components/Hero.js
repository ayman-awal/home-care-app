import {React, useState} from 'react'
import CallModal from './CallModal';
import {Modal} from 'antd';

const Hero = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
        <div className='hero-container'>
            <div className='hero-flex'>
                <div className='left-text'>
                    <div>
                        <h3 className='hero-heading'>Bringing <span>Joy and Care</span> Is Our Ultimate Commitment</h3>
                        <p className='hero-desc'>Welcome to MI Care Provider, a home care agency committed to providing top-quality, 
                        personalized care for your loved ones. Our mission is simple - easing your difficulties 
                        by offering professional, compassionate support right at home.</p>
                        <div className='call-us-button' onClick={() => setToggleModal(true)}>
                            <a><p>Call Us Now</p></a>
                        </div>
                        {/* <div className='hero-search-container'>
                            <div className='zip-input'>
                                <input placeholder='Enter Michigan zip code where care is needed...' type="text" />
                            </div>
                            <div className='search-icon'>
                                <img src='images/hero/searchicon.svg' alt='search-icon'/>
                            </div>
                        </div> */}
                        <div className='testimonials'>
                            <img src='images/hero/Stars.svg' alt='five star rating'/>
                            <p>MI Care Provider delivers unparalleled compassion and professionalism, making the golden years truly shine at home.</p>
                            <p className='reviewer'>Yamin Lamela</p>
                        </div>
                    </div>
                </div>
                <div className='hero-right-sect'>
                    <img src='images/hero/heroimg.png' alt='Doctor helping an old patient'/>
                </div>
            </div>

        </div>
        <Modal
          title={false}
          visible={toggleModal}
          onCancel={() => {
              setToggleModal(false);
          }}
          footer={false}
          width={530}
        >

          <CallModal setToggleModal={setToggleModal}></CallModal>
        </Modal>
    </>
    
  )
}

export default Hero;