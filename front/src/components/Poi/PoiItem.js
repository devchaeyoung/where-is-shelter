const PoiItem = (props) => {

  return (
    // [참고] 지도 위에 표시된 마커를 클릭하면, 해당 마커에 해당하는 POI를 목록의 최상단으로 올려줍니다. PoiMap.js를 참고하세요.
    <div id={props.poiData.id} className="flex flex-col p-4">
      <a href={props.poiData.id}>
        <div>
          <h1 className="font-bold">{props.poiData.id}</h1>
          <h1 className="font-bold">{props.poiData.name}</h1>
          <p className="">{props.poiData.address}</p>
          <p className="">{props.poiData.shelter_type}</p>
          <div className="flex flex-row justify-between items-center">
            <div>
              <span className="mr-2">평점:</span><span className="">{props.poiData.rating}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PoiItem;