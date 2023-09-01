# 무한쉼터🏘️ : 내 지역 쉼터찾기 서비스
> 나날이 오르는 전기세, 난방비 어떻게 절약할 수 있을까요?
> 누구든지 **무한쉼터**를 통해 우리집 주변 무더위, 한파 쉼터를 찾아보세요~
## 어떤 서비스인가요?
- 서울 지역 중심으로 무더위+한파 쉼터를 GPS를 이용해 조회할 수 있는 서비스
- 무더위와 한파가 극한으로 감에 따라 대피할 수 있는 지역별 쉼터의 필요성이 높아졌지만 정작 우리 주변의 쉼터의 위치는 우리가 직접 찾아보기 어려움으로 인해 기획한 본격 쉼터 찾기 서비스
- 극한기후를 대피할 수 있는 쉼터 위치정보 및 각종 관련 통계정보들을 시민들에게 전달해주는 서비스
## Contents
Click to scroll to that page
1. How to start? : 시작 가이드
2. Project Info : 프로젝트 소개
- ​Project intention : 프로젝트 기획 의도
- Service & Data Analysis : 서비스 및 데이터분석
- How can use this project? 
3. Stacks : 사용 기술 스택
4. WEB MVP & Project tree : 주요 기능 및 프로젝트 구조
- Page Image 페이지 구성
- 기능 소개
- ERD
5. Trouble Shooting : 트러블 슈팅
6. END with Members: 프로젝트 멤버 및 역할 소개

## 1. How to start : 시작 가이드
For building and running the application you need :
- [Node.js 18.17.1](https://nodejs.org/en)
- [npm 9.6.7](https://www.npmjs.com/) 
- [yarn 1.22.19](https://yarnpkg.com/)

Installation
```bash
git clone https://kdt-gitlab.elice.io/ai_track/class_08/data_project/team03/data-analysis-project.git
cd data-analysis-project
```
Front
```
cd front
npm install
npm run start
```
Back
```
cd back
yarn
## 서버만 실행할 경우
yarn start
## 개발 모드로 실행할 경우
yarn dev
```
## 💻 2. Project Info : 프로젝트 소개
### ✔️개발 기간
- 2023.08.14 ~ 2023.09.01 (3주)
### ✔️ 배포 서버
- 34.64.160.14
### ✔️ 프로젝트 기획 의도
서비스 소개
- 서울시 열린데이터 광장 홈페이지의 데이터를 이용한 쉼터 조회서비스입니다. 
- 내 위치 중심으로 주변 쉼터를 조회할 수 있습니다.
- 무더위/한파 속 우리동네 쉼터를 찾아보세요!

기능 소개
- 위치조회
- 구별 쉼터 정보 조회
- 쉼터 상세정보 조회
- 현재 날씨 조회
- 통계 데이터 기반 그래프와 같은 시각화 자료 제공
- 쉼터별 리뷰 작성 기능
- 리뷰 작성 횟수별 등급 타이틀 부여
- 쉼터 즐겨찾기 기능

### ✔️ 서비스 및 데이터분석
### ✔️ 프로젝트 구조
#### 🧩 front-end
![front-end](/readme-img/front-end.png)
> 페이지별 구조
* Poi 페이지 기반으로 구현된 서비스.
- Poi란? 위치 정보를 가진 관심 지점을 뜻하는 용어로, 디지털 지도 위에서 표현될 수 있는 주요 시설물(관광지, 교통시설, 문화 시설, 음식점, 연례 축제 장소 등)과 지역 등을 지칭.
- Main Poi(Point of interest) : 본인 위치 조회, 구별 지역 쉼터 페이지.
- Weather : 위치 기반으로 날씨데이터를 API로 가져와 날씨, 기온, 습도 등을 아이콘으로 시각화한 페이지
- Infographic : 지역별 쉼터의 필요성을 폭염, 기후 등으로 데이터로 나타난 인포그래픽 페이지.
- MyPage : 회원이 작성한 쉼터 리뷰와 리뷰 작성 개수별 등급을 확인할 수 있는 페이지.
#### 🧩 back-end
![back-end](/readme-img/back-end.png)
> 로직 구조
- Config : 환경변수 설정
- Model : DB와 연동하여 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- Service : 요청받은 정보를 알맞게 가공하는 로직 수행
- Controller : 서비스로 요청 전달 및 응답
- Middleware : JWT 토큰을 이용한 회원 인증, 에러처리 및 이미지변환


#### 🧩 ERD
![erd](/readme-img/erd.png)
### ✔️ 페이지 구성
## 💻 3. Stacks

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> 
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/>
<img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/>
<img alt="node.js" src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="express" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/>
<img alt="mongodb" src ="https://img.shields.io/badge/mongodb-47A248.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
<img alt="mongoose" src ="https://img.shields.io/badge/Mongoose-880000.svg?&style=for-the-badge&logo=Mongoose&logoColor=White"/>
<img alt="MySQL" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
 <img alt="Python" src ="https://img.shields.io/badge/Python-3776AB.svg?&style=for-the-badge&logo=Python&logoColor=white"/>
<img alt="tailwindcss" src ="https://img.shields.io/badge/tailwindcss-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img alt="font Awesome" src ="https://img.shields.io/badge/font Awesome-528DD7.svg?&style=for-the-badge&logo=fontawesome&logoColor=white"/>




### 💻 Dependencies
<img alt="npm" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/>
<img alt="yarn" src ="https://img.shields.io/badge/yarn-2C8EBB.svg?&style=for-the-badge&logo=yarn&logoColor=white"/>
<img alt="babel" src ="https://img.shields.io/badge/babel-F9DC3E.svg?&style=for-the-badge&logo=babel&logoColor=white"/>
<img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/>
<img alt="jsonwebtokens" src ="https://img.shields.io/badge/jsonwebtokens-000000.svg?&style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
<img alt=".env" src ="https://img.shields.io/badge/.ENV-ECD53F.svg?&style=for-the-badge&logo=dotenv&logoColor=white"/>
<img alt="multer" src ="https://img.shields.io/badge/multer-000000.svg?&style=for-the-badge&logo=multer&logoColor=White"/>
<img alt="bcrypt" src ="https://img.shields.io/badge/bcrypt-665AD8.svg?&style=for-the-badge&logo=bcrypt&logoColor=white"/>
<img alt="codesandbox" src ="https://img.shields.io/badge/codesandbox-151515.svg?&style=for-the-badge&logo=codesandbox&logoColor=white"/>

### 🔗 Cooperation

<img alt="gitlab" src ="https://img.shields.io/badge/gitlab-FC6D26.svg?&style=for-the-badge&logo=gitlab&logoColor=white"/>
<img alt="notion" src ="https://img.shields.io/badge/notion-000000.svg?&style=for-the-badge&logo=notion&logoColor=white"/>

### 🌏 With Deploy
<img alt="vmware" src ="https://img.shields.io/badge/vmware-607078.svg?&style=for-the-badge&logo=vmware&logoColor=white"/>
<img alt="nginx" src ="https://img.shields.io/badge/nginx-009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/>
<img alt="pm2" src ="https://img.shields.io/badge/pm2-2B037A.svg?&style=for-the-badge&logo=pm2&logoColor=white"/>

## 6. END
- elice Ai 8기 3팀 "진행시켜"조
### ✔️프로젝트 멤버 구성



### 
