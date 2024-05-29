// fs module 이란 file system module로 파일을 읽거나 쓰는 등의 작업을 할 수 있음.
const fs = require('fs'); // fs module을 가져옴

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        // response의 body에 form tag를 추가
        // 여기서 form 의 역할은 사용자로부터 input을 받아서 서버로 전송하는 역할을 함.
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // response를 종료
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // on() 메소드는 event listener를 추가함. 여기서는 'data' event listener를 추가함.
        // event listener 는 event가 발생했을 때 실행되는 함수를 의미함.
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1]; 
            // split() 메소드는 문자열을 나누어 배열로 만들어줌. 여기서는 '='을 기준으로 나눔.
            fs.writeFileSync('message.txt', message); // message.txt에 message를 저장
            res.statusCode = 302; // 302 status code는 redirection을 의미함.
            res.setHeader('Location', '/'); // redirection할 url을 설정
            return res.end(); // response를 종료
        });
    } 

    res.setHeader('Content-Type', 'text/html'); // response의 header를 설정
    res.write('<html>'); // response의 body에 html tag를 추가
    res.write('<head><title>My First Page</title></head>'); // response의 body에 head tag를 추가
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>'); // response의 body에 body tag를 추가
    res.write('</html>'); // response의 body에 html tag를 닫음
    res.end(); // response를 종료
    // res.end() 이후에는 res.write()를 사용할 수 없음. (response가 이미 종료되었기 때문에
    // res.write()를 사용하면 error가 발생함.
};

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};

// module.exports = requestHandler; // requestHandler를 export함.

// exports.handler = requestHandler; // requestHandler를 export함.
// exports.someText = 'Some hard coded text'; // someText를 export함.
