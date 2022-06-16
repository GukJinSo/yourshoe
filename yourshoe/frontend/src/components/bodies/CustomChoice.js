import React from 'react';
import { Link } from 'react-router-dom';
import CustomService from './CustomService';

const CustomChoice = () => {
  return (
  <div className='grid-container'>
    <div className='grids'>그리드컬럼1</div>
    <div className='grids'><CustomService></CustomService></div>
    <div className='grids'>그리드컬럼3</div>
    <div className='grids'>그리드컬럼4</div>
    <div className='grids'>그리드컬럼5</div>
    <div className='grids'>그리드컬럼6</div>
    <div className='grids'>그리드컬럼7</div>
    <div className='grids'>그리드컬럼88</div>

  </div>);
};

export default CustomChoice;
