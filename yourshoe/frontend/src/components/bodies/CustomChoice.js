import React from 'react';
import { Link } from 'react-router-dom';
import CustomService from './CustomService';


const CustomText = () => {
  return <div className = 'custom-desc-div'>
    <h2>Newbalance 997H
  </h2>
  <h4>89.99$</h4>
  <h5>Description</h5>
    <li>Synthetic upper</li>
    <li>Lightweight injection-molded EVA foam midsole provides lightweight cushioning</li>
    <li>Rubber outsole</li>
    <li>Lace-up closure for a secure fit</li>
  </div>
}

const CustomChoice = () => {
  
  return (
  <div className='grid-container'>
    <CustomService></CustomService>
    <CustomText />
  </div>);
};

export default CustomChoice;
