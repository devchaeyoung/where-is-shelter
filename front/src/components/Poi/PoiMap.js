import { React, useState } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Map, Marker, Popup } from "react-leaflet";

// [참고사항] React-leaflet으로 바인딩된 Leaflet.js에서 필수적으로 요구하는 CSS 스타일은 Tailwind CSS가 아닌 /public/index.html를 통해서 가져옵니다.

function PoiMap() {
  return(
    <div>
      <div id="map" className="w-full h-[400px]">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>   
  )
}

export default PoiMap;