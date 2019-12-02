# Serverless Typescript CRUD Template

---

## typescript-lambda-crud-test

Serverless 프레임워크를 기반으로 Typescript & Mocha를 적용한 AWS Dynamodb의 CRUD 예제소스 입니다.

---

## command history for making this project

- make project folder  
  `mkdir typescript-lambda-crud-test && cd typescript-lambda-crud-test`

- create template  
  `sls create -t aws-nodejs-typescript && npm i`

- npm 초기화  
  `npm init`

- Mocha & Chai 설치  
  `npm i mocha chai nyc -D`

- Serverless Offline Plugin 설치  
  `npm i serverless-offlne --save-dev`

- Serverless Mocha Plugin 설치  
  `npm i serverless-mocha-plugin --save-dev`

- handler.ts 실행 테스트  
  `sls invoke local -f hello`

* result :
  `{ "statusCode": 200, "body": "{\n \"message\": \"Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!\",\n \"input\": \"\"\n}"}`

### - @types/aws-lambda 설치

`npm i --save-dev @types/aws-lambda`

### - @types/mocha @types/chai 설치

`npm i @types/mocha @types/chai --save-dev`

### - Ts-node 설치

`npm i ts-node --save-dev`

---

## commands for running

### - 코드 배포

`sls deploy`

### - verbose 배포

`sls deploy -v`

### - offline 실행

`sls offline`

### - Mocha Test 실행

`npm test`

---

## Environment for development

`OS : OSX`  
`Code Editor : Visual Studio Code`

---

## script 설정

    "scripts": {
        "test": "mocha -r ts-node/register ./src/test/*.spec.ts"
    }

---

## devDependencies 구성

    "devDependencies": {
    "@types/aws-lambda": "^8.10.17",
    "@types/chai": "^4.2.5",
    "@types/mocha": "^5.2.7",
    "@types/node": "^10.12.18",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "nyc": "^14.1.1",
    "serverless-mocha-plugin": "^1.11.0",
    "serverless-offline": "^5.12.1",
    "serverless-webpack": "^5.2.0",
    "ts-loader": "^5.3.3",
    "typescript": "^3.2.4",
    "webpack": "^4.29.0"
    }

---

## tsconfig 구성

    "compilerOptions": {
        "lib": ["es2017"],
        "moduleResolution": "node",
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "sourceMap": true,
        "target": "es6",
        "rootDir": "./src",
        "outDir": "./dist"
    }

---

## 참고사이트

- https://www.jamestharpe.com/serverless-typescript-getting-started/
- https://www.jeremydaly.com/how-to-add-test-coverage-to-your-serverless-applications/
- https://medium.com/@jwyeom63/%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EB%8A%94-node-js%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%84%9C%EB%B2%84%EB%A6%AC%EC%8A%A4-serverless-503ee61539d4
