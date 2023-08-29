# 실행 방법
- 먼저 `cd back` 명령어를 통해 back 디렉토리로 이동해줍니다.
## 환경변수 파일 설정해주기
### GUI로 설정하기
- `.env` 파일을 만들어 기본 환경을 세팅합니다.
- 입력값

```
SERVER_PORT= <실행할 포트번호>
MONGO_URL= "mongodb+srv://elice_3_team:1234@cluster0.orhh1yn.mongodb.net/shelter"
JWT_SECRET_KEY = "goahead"
JWT_ALG = "HS256"
JWT_EXP = "30m"
```
### CLI로 설정하기
- 아래 명령어로 nano 에디터를 실행해줍니다.
```
nano .env
```
- nano가 실행되면 상단의 .env입력값을 입력해줍니다.
- `ctrl+x`를 누르고 `y`를 눌러 저장을 해줍니다. 

## 서버 실행시키는 법

1. back 디렉토리에서 `npm i`또는 `yarn` 명령어를 통해 pakage.json에 설정값을 받아줍니다.

```
npm i
yarn

```

2. 실행명령어 터미널에 입력해주기

- `yarn start`또는 `npm run start`명령어를 이용해 서버를 실행 시켜줍니다.
- `--watch`모드로 실행할 시 `yarn dev` 또는 `npm dev` 명령어를 입력해줍니다.

```
yarn start
yarn dev
```

4. 연결 성공

- 터미널 창에 `정상적으로 연결되었습니다.` 문구가 뜨는 걸 확인한 후
  localhost:포트번호로 접속해줍니다.
