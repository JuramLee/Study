// import { useState } from 'react';
import { useState } from 'react';
import Child1 from './state최적화';

function App() {
  const [name1, setName1] = useState('쪼밥이');
  const [name2, setName2] = useState('똥만이');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>부모</div>
      {/* <Child1 name={'쪼밥이'} />
      <Child1 name={'똥만이'} /> */}
      <Child1 name={name1} show={show} setShow={setShow} />
      <Child1 name={name2} show={show} setShow={setShow} />
    </div>
  );
}

export default App;

// 이름을 가진 state값을 부모가 가지고 넘겨주는 경우, 심지어 set 함수도 사용하지 않음
// 이게 무분별한 state 남발과 props drilling의 사례
// 이때에는 state가 아닌 string으로 관리를 하는 방법 혹은 Child1과 Child2 컴포넌트를 만들어서 각자 내부에 이름을 선언해줘도됨
