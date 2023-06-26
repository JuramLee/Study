import React, { useState } from 'react';
import BadChild from './child';

const BadParent = () => {
  const [name1, setName1] = useState('쪼밥이');
  const [name2, setName2] = useState('똥만이');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>bad parent</div>
      <BadChild name={name1} show={show} setShow={setShow} />
      <BadChild name={name2} show={show} setShow={setShow} />
    </div>
  );
};

export default BadParent;

// name state값을 부모가 가지고 넘겨주는 경우, 심지어 set 함수는 사용하지도 않음
// show도 같은 state를 넘겨주고 있어서 하나만 바뀌어도 같이 바뀜
// 이게 무분별한 state 남발과 props drilling의 사례
// 이때에는 state가 아닌 string으로 관리를 하는 방법 혹은 Child1과 Child2 컴포넌트를 만들어서 각자 내부에 이름을 선언해줘도됨
