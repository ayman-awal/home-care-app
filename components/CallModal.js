import React from 'react';

const CallModal = ({setToggleModal}) => {
  return (
    <div className="call-modal">
      <div className="call-modal-content">
        <h2>Contact Us</h2>
        <p>
          <a href="tel:+15862767347">+1 (586) 276-7347</a>
        </p>
      </div>
    </div>
  );
};

export default CallModal;