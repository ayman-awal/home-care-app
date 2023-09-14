import {React, useState} from 'react'
import { Modal } from "antd";
import CallModal from './CallModal';


const AboutTeam = () => {
  const [toggleModal, setToggleModal] = useState(false);


  return (
    <>
        
    <div style={{backgroundColor:'#D9E9E4'}}>
        <div className='our-team-container'>
            <div className='our-team'>
                <div>
                    <h4>Our Team</h4>
                    <h3>Our people with responsible and service oriented qualities</h3>
                    <p className='our-team-p'>At MI Care Provider, our dedicated team of experts is 
                    committed to enhancing lives with personalized home care services. We prioritize safety, 
                    compassion, and innovation, ensuring each individual lives with dignity and happiness. 
                    Join our mission to make every home a sanctuary of comfort and independence.</p>
                
                    <div className='call-us-button' onClick={() => setToggleModal(true)}>
                        <a>
                            <p>Contact Us</p>
                        </a>
                    </div>
                </div>

                <div className='team-images'>
                    <img src='/images/about/teamicons.png'/>
                </div>
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

export default AboutTeam;