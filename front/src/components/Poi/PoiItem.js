const PoiItem = (props) => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="font-bold">{props.poiData.name}</h1>
      <p className="">{props.poiData.address}</p>
      <p className="">{props.poiData.shelter_type}</p>
      <p className="flex flex-row items-center">
        <span className="mr-2">평점:</span><span className="">{props.poiData.rating}</span>
      </p>
      
    </div>
  );
};

export default PoiItem;