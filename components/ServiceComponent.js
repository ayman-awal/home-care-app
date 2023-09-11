import React from 'react'

export const ServiceComponent = (props) => {
    const {title, img, desc} = props
  return (
    <div className='service-component-container'>
        <div className='service-card'>
            <img src={img} alt=''/>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}
