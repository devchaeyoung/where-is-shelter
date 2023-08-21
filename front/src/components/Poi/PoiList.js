import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getData } from '../../apis/api';
import PoiItem from './PoiItem'
import PoiDataContext from '../../contexts/PoiDataContext';

// 지정한 행정구역 내에 있는 쉼터 데이터를 API를 통해서 불러옵니다
// const districtPoiData = ({ district }) => {
const PoiList = () => {

  return (
    <PoiDataContext.Consumer>
      {PoiData =>
        PoiData.map(item => (
         <PoiItem key={item.id} poiData={item} />
        ))
      }
    </PoiDataContext.Consumer>
  );
};

export default PoiList;