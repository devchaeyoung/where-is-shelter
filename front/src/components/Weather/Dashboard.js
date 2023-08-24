import { React, useState } from 'react';

function WeatherDashboard () {
    return (
        <div>
            <h1 className="font-bold">날씨 대시보드입니다</h1>
            <div>
              <p>현재 기상특보입니다</p>
            </div>
            <div>
              <p>현재 온도입니다</p>
              <p>3시간 뒤 예상 온도입니다</p>
            </div>
            <div>
              <p>현재 습도입니다</p>
              <p>3시간 뒤 예상 습도입니다</p>
            </div>
            <div>
              <p>예상 강수량 정보입니다</p>
            </div>
        </div>
    )
}

export default WeatherDashboard;