import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getData } from '../../apis/api';
import PoiItem from './PoiItem'
import PoiDataContext from '../../contexts/PoiDataContext';

const PoiList = () => {

  return (
    <PoiDataContext.Consumer>
      {poiData =>
        poiData.map(item => (
         <PoiItem key={item.id} poiData={item} />
        ))
      }
    </PoiDataContext.Consumer>
  );
};

export default PoiList;