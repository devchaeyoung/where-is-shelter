import { React, useState } from 'react';
import PoiDetails from "./PoiDetails";
import PoiReview from "./PoiReview";

const PoiList = () => {
  return (
    <div className="flex flex-col grow overflow-y-auto mx-4 px-2">
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
      <h1 className="text-lg font-bold">장소명</h1>
      <h2 className="text-md">주소</h2>
      <h3 className="text-md">정보1</h3>
      <p>정보2</p>
      <PoiReview />
    </div>
  )
}

export default PoiList;