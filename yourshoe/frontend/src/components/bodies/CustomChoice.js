import React, { useRef } from 'react';
import back_997h from '../../img/997h_back.jpg';
import side_997h from '../../img/997h_side.jpg';
import diagonal_997h from '../../img/997h_diagonal.jpg';
import upside_997h from '../../img/997h_upside.jpg';
import rside_997h from '../../img/997h_reverse_side.jpg';
import CustomService from './CustomService';
import Picker from '../Picker';
import { useDispatch, useSelector } from 'react-redux';

const CustomText = () => {
  const colors = useSelector((store) => store);
  const dispatcher = useDispatch();

  return (
    <div className="custom-desc-div">
      <h2>Newbalance 997H</h2>
      <h4>89.99$</h4>
      <h5
        class="desktop-picker-desc"
        style={{
          color: colors.picked === '' ? 'grey' : 'salmon',
        }}
      >
        {colors.picked === ''
          ? '좌측의 오브젝트 파츠를 클릭하여 커스터마이즈 색상 미리보기'
          : colors.picked + ' 선택됨'}
      </h5>
      <Picker className="github-picker" />
      <h5>Description</h5>
      <li>Synthetic upper</li>
      <li>
        Lightweight injection-molded EVA foam midsole provides lightweight
        cushioning
      </li>
      <li>Rubber outsole</li>
      <li>Lace-up closure for a secure fit</li>
      <ButtonGrids />
    </div>
  );
};

const ButtonGrids = () => {
  const buttons = [
    { size: 4, stock: 5 },
    { size: 4.5, stock: 0 },
    { size: 5, stock: 7 },
    { size: 5.5, stock: 1 },
    { size: 6, stock: 2 },
    { size: 6.5, stock: 3 },
    { size: 7, stock: 5 },
    { size: 7.5, stock: 0 },
    { size: 8, stock: 2 },
    { size: 8.5, stock: 4 },
    { size: 9, stock: 0 },
    { size: 9.5, stock: 7 },
    { size: 10, stock: 3 },
    { size: 10.5, stock: 3 },
    { size: 11, stock: 0 },
    { size: 11.5, stock: 3 },
    { size: 12, stock: 3 },
    { size: 13, stock: 3 },
    { size: 14, stock: 3 },
    { size: 15, stock: 3 },
    { size: 16, stock: 3 },
    { size: 17, stock: 3 },
    { size: 18, stock: 0 },
  ];

  const grids = useRef();

  const handleClick = (e) => {
    // HTMLCollection은 유사배열이므로 map.forEach를 위한 변환이 필요
    Array.from(grids.current.children).map((c) => {
      c.className = '';
    });
    e.target.className = 'clicked-button';
  };

  return (
    <div className="">
      <h5>Select size</h5>

      <div className="button-grids" ref={grids}>
        {buttons.map((button) => {
          return button.stock !== 0 ? (
            <button onClick={(e) => handleClick(e)}>{button.size}</button>
          ) : (
            <button disabled>{button.size}</button>
          );
        })}
      </div>

      <div>
        <button className="orderButton">Order now</button>
      </div>
    </div>
  );
};

const CustomChoice = () => {
  return (
    <div>
      <div className="container">
        <div className="image-grid">
          <img src={side_997h} alt="측면"></img>
          <CustomService></CustomService>
          <img src={back_997h} alt="후면"></img>
          <img src={diagonal_997h} alt="후면"></img>
          <img src={upside_997h} alt="후면"></img>
          <img src={rside_997h} alt="후면"></img>
        </div>
        <CustomText />
      </div>
    </div>
  );
};

export default CustomChoice;
