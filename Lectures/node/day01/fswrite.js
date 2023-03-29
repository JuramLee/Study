const fs = require('fs');

const text = '아 하기싫다';

fs.writeFile('./test1.txt', text, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else console.log('파일이 정상작동했습니다.');
});

try {
  fs.writeFileSync('./test2.txt', text, 'utf-8');
} catch (err) {
  console.log(err);
}
