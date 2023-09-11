import React from 'react'
import { Employment } from './Employment';
import { ServiceCard } from './ServiceCard';
import {Input, Select, Button, Radio, Space} from 'antd';
const { Option } = Select;

const ContactForm = () => {
  return (
    <div style={{backgroundColor:'#D9E9E4'}}>
        <div className='contact-container' >
            <div className='contact-flex'>
                <div>
                    <h4 className='contact-title'>Contact Us</h4>
                    <p className='contact-text'>If you have a general question or want to provide helpful feedback regarding your 
                    local care giver, please email <span style={{textDecoration: 'underline'}}>ouremailexample@gmail.com</span></p> 
                    <p className='contact-text'>Need more information about our compassionate home care services? Call us at 
                    800-***-4189 or fill out the contact form below.</p>
                    <div className='contact-form'>
                        <h3>Contact Information</h3>
                        <h4>I am interested in:</h4>
                        <Radio.Group style={{marginBottom: '20px'}}>
                            <Space direction="vertical">
                                <Radio value={1}>Home Care</Radio>
                                <Radio value={2}>Job as care giver</Radio>
                            </Space>
                        </Radio.Group>
                        <div className='input-fields'>
                            <label for="FullName">Full Name</label>
                            <Input type="FullName" id="FullName" name="FullName" required />
                            <div className='flex-input'>
                                <div>
                                    <label for="phone">Phone</label>
                                    <Input type="phone" id="phone" name="phone" required />
                                </div>
                                
                                <div>
                                    <label for="email">Email</label>
                                    <Input type="email" id="email" name="email" required />
                                </div>
                            </div>
                            <h4>I am interested in:</h4>
                            <Radio.Group>
                                <Space direction="horizontal">
                                    <Radio value={1}>Phone</Radio>
                                    <Radio value={2}>Text</Radio>
                                    <Radio value={3}>Email</Radio>
                                    <Radio value={4}>Any</Radio>
                                </Space>
                            </Radio.Group>
                        </div>

                        <div className='contact-component' style={{margin: 'auto'}}>
                            <div className='call-us-button'>
                                <p>Submit</p>
                            </div>
                            {/* <div className='hero-search-container'>
                                <div className='zip-input'>
                                    <input placeholder='Enter Michigan zip code where care is needed...' type="text" />
                                </div>
                                <div className='search-icon'>
                                    <img src='images/hero/searchicon.svg' alt='search-icon'/>
                                </div>
                            </div> */}
                        </div>
                        
                    </div>
                </div>
                <div className='contact-cards'>
                    <Employment />
                    <ServiceCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;