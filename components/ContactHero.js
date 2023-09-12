import {React, useState} from 'react'
import { Modal } from "antd";
import CallModal from './CallModal'

const ContactHero = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <div>
          <div className='contact-hero'>
              <div className='red-background'></div>
              <div className='bgd-img'>
                  <h3>Let&apos;s Make Homecare Easier Together.<br /> Contact Us Now!</h3>
                  <p>Lorem ipsum dolor sit amet consectetur. Nisl tristique rhoncus 
                  consectetur ullamcorper egestas ac facilisis. Vitae aliquet egestas 
                  et adipiscing sit. Viverra.</p>
                  <div className='call-us-button' onClick={() => setToggleModal(true)}>
                    <a>
                      <p>Contact Us</p>
                    </a>
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

export default ContactHero;
