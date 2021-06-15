import React from 'react';
import './App.css';

function Imgs({random, breed, handleRating}) {
  
  return (
    <div className="box-container">
        <div className="box">
            <img src={random} alt="" />
        </div>
        <div className="btn-container">
          <button className="btn" onClick={handleRating}>{breed}</button>
        </div>
    </div>
  );
}

export default Imgs;