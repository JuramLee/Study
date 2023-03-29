const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.set('port', 3000);

// 미들웨어
// morgan : log 미들웨어
// dev, combined, common, short, tiny
app.use(morgan('dev'));
app.use(express.json()); //json데이터를 읽는 것을 허용
app.use(express.urlencoded({ extended: false }));
// url에 있는 정보(params) 정보를 해석할 때 express 내부에 있는 모듈만 사용할 것인지
// 만약 false라면 추가 라이브러리가 아닌 내장 모듈로만 해당 주소값을 해석


// 정적인 파일이미지, html, css.. 와 같은 것들을
// 사용자가 특정 라우트에 접속하였을 때 폴더 접근 권한을 주는 미들웨어
app.use('/', express.static(path.join(__dirname, 'public')));

// 라우팅
app.get('/todo/:todoId', (req, res) => {
  console.log(req.params.todoId);
  res.send('hello express!');
});

app.get('/todos', (req, res) => {
  console.log(req.query.todoId);
  console.log(req.query.page);
  res.send('Hello world');
});

// app.listen(포트번호, 콜백함수)
app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}으로 서버 실행중`);
});
