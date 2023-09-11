import React from 'react'

export const ReviewComponent = () => {
  return (
    <div className='review-container'>
        <div className='reviews'>
            <div className='review-header'>
                <img src='images/p2p/avatar.png' alt=''/>
                <div className='info-user'>
                    <p>Ayman Shehzad Awal</p>
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
                <p>Lorem ipsum dolor sit amet consectetur Pharetra nam et sed cursus. Hac testdas uddes.</p>
            </div>
        </div>
        
    </div>
  )
}
