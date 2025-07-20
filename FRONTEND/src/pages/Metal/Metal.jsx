import React from 'react';
import './Metal.css'; 
import CardDisplay from '../../components/CardDisplay/CardDisplay';

const Metal = ({category}) => {

  return (
    <>
      <div className="card-page-container">
        <h1>Metal NFC Cards</h1>
        <CardDisplay category="Metal card"/>
      </div>
            
    </>
  );
};

export default Metal;
