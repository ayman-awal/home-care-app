import React from 'react'

export const ReviewComponent = ({name, desc, img}) => {
  return (
    <div className='review-container'>
        <div className='reviews'>
            <div className='review-header'>
                <img src={img} alt=''/>
                <div className='info-user'>
                    <p>{name}</p>
                    <div className='user-location'>
                        <img src='images/p2p/location.svg' alt=''/>
                        <p>Michigan Resident</p>
                    </div>
                </div>
            </div>

            <div className='star-rating'>
                <img src='images/p2p/star.svg' alt=''/>
                <img src='images/p2p/star.svg' alt=''/>
                <img src='images/p2p/star.svg' alt=''/>
                <img src='images/p2p/star.svg' alt=''/>
                <img src='images/p2p/star.svg' alt=''/>
            </div>
            <div className='review-text'>
                <p>{desc}</p>
            </div>
        </div>
        
    </div>
  )
}
