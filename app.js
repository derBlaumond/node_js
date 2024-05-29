const http = require('http'); // http module을 가져옴

const routes = require('./routes'); // routes.js 파일을 가져옴

console.log(routes.someText);

const server = http.createServer(routes.handler); // server를 생성함. routes.handler는 requestHandler를 의미함.

server.listen(3000); // localhost:3000에 접속하면 req object가 출력됨.