import React, { useEffect, useRef, useState } from 'react';
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

const ButtonGrids = () => {
  
  const buttons = [
    {size:4, stock:5},
    {size:4.5, stock:0},
    {size:5, stock:7},
    {size:5.5, stock:1},
    {size:6, stock:2},
    {size:6.5, stock:3},
    {size:7, stock:5},
    {size:7.5, stock:0},
    {size:8, stock:2},
    {size:8.5, stock:4},
    {size:9, stock:0},
    {size:9.5, stock:7},
    {size:10, stock:3}  ,
    {size:10.5, stock:3} , 
    {size:11, stock:0}  ,
    {size:11.5, stock:3} , 
    {size:12, stock:3} , 
    {size:13, stock:3}  ,
    {size:14, stock:3}  ,
    {size:15, stock:3}  ,
    {size:16, stock:3}  ,
    {size:17, stock:3}  ,
    {size:18, stock:0} 
  ]

const grids = useRef();

  const handleClick = (e) => {

    // HTMLCollection은 유사배열이므로 map.forEach를 위한 변환이 필요
    Array.from(grids.current.children).filter((c)=>{
      c.className = '';
    })
    e.target.className = 'clicked-button';
  }

  return( 
  <div className='sizePicking-div'>
    <h5>Select size</h5>
  <div className="button-grids" ref={grids}>
    {buttons.map((button)=>{
      return button.stock !== 0? <button onClick={(e)=>handleClick(e)} >{button.size}</button> : <button disabled>{button.size}</button>
    })}
  </div>
  <div>
  <button className='orderButton' >Order now</button>
  </div>
  </div>)
  

}

const CustomChoice = () => {
  
  return (
  <div className='grid-container'>
    <CustomService></CustomService>
    <CustomText />
    <ButtonGrids />

  </div>);
};

export default CustomChoice;
