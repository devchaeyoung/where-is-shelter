import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getData } from '../../apis/api';
import PoiItem from './PoiItem'
import DistrictPoiDataContext from '../../contexts/DistrictPoiDataContext';

const PoiList = () => {

  return (
    <DistrictPoiDataContext.Consumer>
      {poiData =>
        poiData.map(item => (
         <PoiItem key={item.id} poiData={item} />
        ))
      }
    </DistrictPoiDataContext.Consumer>
  );
};

export default PoiList;