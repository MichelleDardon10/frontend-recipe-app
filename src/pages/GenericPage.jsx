import React from 'react';
import '../botones.css';

function GenericPage(props) {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div >

      <button className='go-back-button' onClick={handleGoBack}>Go Back</button>
      <div className='calendar-container'>
        <h1 className='calendar-title'>{props.title}</h1>
      </div>
    </div>
  );
}

export default GenericPage;