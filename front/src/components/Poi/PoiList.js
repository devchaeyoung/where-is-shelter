import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getData } from '../../apis/api';


// 테스트를 위해서 지역명을 하드코딩 합니다.
const district = 'test';

// 지정한 행정구역 내에 있는 쉼터 데이터를 API를 통해서 불러옵니다
// const districtPoiData = ({ district }) => {
const PoiList = () => {

  const [districtPoiData, setDistrictPoiData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistrictPoiData = async () => {
      try{
        setError(null);
        setDistrictPoiData(null);

        getData(district)
        .then((res) => {
          setDistrictPoiData(res.data);
          setIsFetching(false);
        })
      } catch (err) {
        setError(err);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
    }

    fetchDistrictPoiData();
  }, []);

  if (isFetching) {
    return (
      <div>
        <p>데이터를 가져오는 중입니다...</p>
      </div>
    );
  }

  if (!districtPoiData) {
    return null;
  }
      
  return (
    <ul>
      {districtPoiData.map(poi => (
        <li key={districtPoiData.id}>
          {poi.name} ({poi.shelter_type})
        </li>
      ))}
    </ul>
  );
};

/*
const PoiList = () => {

  const [poiList, setPoiList] = useState([]);
  const [isFetching, setIsFetching] = useState(1);

  return (
    <div className="flex flex-col grow overflow-y-auto mx-4 px-2">
      {datas.length > 0 ? (
        datas.map((data) => (
          <DocumentItem key={data?._id} data={data} setDatas={setDatas} />
        ))
      )}
      <div className="flex flex-col">
        <h1 className="poi-id">{districtPoi?.id}</h1>
        <p className="poi-name">{districtPoi?.name}</p>
        <p className="poi-shelter-type">{districtPoi?.shelter_type}</p>
        <p className="poi-address">{districtPoi?.address}</p>
        <p className="poi-latitude">{districtPoi?.latitude}</p>
        <p className="poi-longitude">{districtPoi?.longitude}</p>
      </div>
    </div>
  )
}
*/

export default PoiList;