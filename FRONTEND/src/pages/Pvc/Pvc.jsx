import React from 'react';
import './Pvc.css'; 
import CardDisplay from '../../components/cardDisplay/cardDisplay';


const Pvc = ({category}) => {
  
  return (
    <>
      <div className="card-page-container">
        <h1>PVC NFC Cards</h1>
        <CardDisplay category="Pvc card"/>
      </div>
    </>
  );
};

export default Pvc;
