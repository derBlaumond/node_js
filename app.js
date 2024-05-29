// const http = require('http'); // http module을 가져옴

// const routes = require('./routes'); // routes.js 파일을 가져옴

// console.log(routes.someText);
// const server = http.createServer(routes.handler); // server를 생성함. routes.handler는 requestHandler를 의미함.

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // body-parser를 사용함.
app.use(express.static(path.join(__dirname, 'public'))); // static file을 사용함. (css, js, image 등)

app.use('/admin', adminRoutes); // adminRoutes를 사용함.
app.use(shopRoutes); // adminRoutes를 사용함.


// 404 error handling 은 가장 아래에 위치해야함.
// 왜냐하면 위에서부터 순차적으로 실행되기 때문임.
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000); // localhost:3000에 접속하면 req object가 출력됨.
// const server = http.createServer(app); // server를 생성함. app은 express application을 의미함.
// server.listen(3000); // localhost:3000에 접속하면 req object가 출력됨.