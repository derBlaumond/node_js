const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express!</h1>'); // response를 보냄.
    // path.join 메소드란 여러 개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어주는 메소드임.
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); 

});

module.exports = router;