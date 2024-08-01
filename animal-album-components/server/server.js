const express = require('express'); // express 모듈 불러오기
const path = require('path'); // 파일의 경로를 보다 쉽게 나타낼 수 있는 path 모듈 가져오기
const app = express(); // express 모듈을 호출한 결과값을 할당
const PORT = 3000; // 포트 넘버 설정

app.use(express.static(path.join(__dirname, '..'))); // 해당 서버가 탐색기에 있는 폴더에 접근할 수 있도록 경로 설정

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
}) // 어떤 경로로 요청이 오든 항상 동일하게 index.html 반환

app.listen(PORT, () => {
    console.log(`START SERVER`);
}); // 포트 넘버 설정