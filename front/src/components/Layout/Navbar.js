import { React } from 'react';

function Navbar () {
    return (
        <div className="flex flex-row w-full h-20 items-center">

            <div className="flex flex-row w-full h-20 justify-between items-center px-8 font-bold text-lg">
                <div>
                    <a href="/Poi" className="mr-12 underline decoration-solid decoration-4 underline-offset-8">극한날씨 쉼터</a>
                    <a href="/Weather" className="mr-12">기상정보</a>
                    <a href="/Infographic" className="mr-12">인포그래픽</a>
                </div>
                <div>
                    <a href="/Mypage">마이페이지</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;