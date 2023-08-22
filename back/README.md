# 소통을 위한 back 서버 실행법

- 먼저 `cd back` 명령어를 통해 back 디렉토리로 이동해줍니다.

## 서버 실행시키는 법

1. back 디렉토리에서 `npm i` 명령어를 통해 pakage.json에 설정값으 받아줍니다.

```
npm i
```

2. `.env` 파일을 만들어 기본 환경을 세팅합니다.

- 입력값

```
SERVER_PORT= <실행할 포트번호>
MONGO_URL= "mongodb+srv://elice_3_team:1234@cluster0.orhh1yn.mongodb.net/shelter"
JWT_SECRET_KEY = "goahead"
JWT_ALG = "HS256"
JWT_EXP = "30m"
```

3. 실행명령어 터미널에 입력해주기

- `yarn start`또는 `npm start`명령어를 이용해 서버를 실행 시켜줍니다.
- `--watch`모드로 실행할 시 `yarn dev` 또는 `npm dev` 명령어를 입력해줍니다.

```
yarn start
yarn dev
```

```
npm start
npm dev
```

4. 연결 성공

- 터미널 창에 `정상적으로 연결되었습니다.` 문구가 뜨는 걸 확인한 후
  localhost:포트번호로 접속해줍니다.
