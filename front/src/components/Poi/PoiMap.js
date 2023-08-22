import { React, useState } from 'react';

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Map, Marker, Popup } from "react-leaflet";

import PoiDataContext from '../../contexts/PoiDataContext';


// [참고사항] React-leaflet으로 바인딩된 Leaflet.js에서 필수적으로 요구하는 CSS 스타일은 Tailwind CSS가 아닌 /public/index.html를 통해서 가져옵니다.
function PoiMap() {

  return(
    <PoiDataContext.Consumer>
      {PoiData => 
        <div id="map" className="w-full h-[400px]">
          <MapContainer center={[37.3358, 126.5840]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {PoiData.map(item => (
              <Marker 
                key={item.id} 
                position={[item.latitude, item.longitude]}
                eventHandlers={{
                  click: (event) => {
                    // [참고] 지도 위에 표시된 마커를 클릭하면, 해당 마커에 해당하는 POI를 목록의 최상단으로 올려줍니다. PoiList.js를 참조하세요.
                    window.location = `#${item.id}`
                  },
                }}
              >
                <Popup>
                  <h1>{item.name}</h1>
                  <p>{`${item.address.split(' ')[0]} ${item.address.split(' ')[1]}`}</p>
                </Popup>

              </Marker>
            ))}
          </MapContainer>
        </div>
      }
    </PoiDataContext.Consumer>
  )
}

export default PoiMap;