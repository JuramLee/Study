// import { useState } from 'react';

import React from 'react';

const Child1 = ({ name, show, setShow }) => {
  // const [show, setShow] = useState(false);

  const clickBtn = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={clickBtn}>내 이름은!</button>
      {show && <div>{name}</div>}
    </div>
  );
};

export default React.memo(Child1);

/*
react hooks 최적화
원래 줍줍은 useAuth로 관리하고 잇엇나? context가 아니라?
원래 줍줍은 context로 관리하는게 아니라 라우팅 설정만 해줫어서 privateRoute/tokenService로 토큰 값의 유무처리했다 이걸 context로 바꾼게 useAuth다.
네고마켓은 훅함수로 관리햇고 나실님은 context로 관리
context와 hook 둘의 랜더링 측면의 차이를 알고싶다.
context가 업데이트 되면 context를 사용하는 모든곳에 리랜더링 된다.
custom훅이면 사용되는 부분이 많더라도 그 해당 부분만 리랜더링 되는거라 그게 더 랜더링 최적화가 되는거 아니냐?
전역관리도 의존성 주입하는 방법 중 하나
atom도 state니까 set해도 새로고침해도 다시 default로 돌아간다. 일단 webstorage에 저장하고 시작하고 새로고침하면 storage에서 값을 가져다 초기화시켜주기
결국 둘다 같이 관리해줘야하는거 아닌가

webstorage의 값을 가지고 온다해도 state가 아니니 화면에 안그려지지 않냐. 결국 화면을 랜더링하기 위해서는 state로 관리해야한다.

customhook context의 차이
의존성 주입은 최소한 리액트에서 의미하는 바는 context
커스텀 훅은 uiseInput을 예로 들면 훅으로 빼면서 재사용성을 높임! 둘다 의존성 주입은 맞지만 context는 재사용인 느낌보다는 props drilling방지
전역 상태 관리도 의존성 주입인가?

customhook은 디바운스로 뺌
useInput을 context로 뺄순 없지않나? customhook으로 만들면서 한 컴포넌트로 input값을 받아야하는 state를 가져오는걸 2번 하지 않고 커스텀을 사용하면 되고
context는 하나의 상태를 전역화 시키는 개념

state를 사용하는건 다 customhook화 시킬수잇다
context에서도 customhook을 사용할수잇지않나?
context는 의존성 주입의 방법중 하나지 customhook까지는 아니다?

상태 관리 면에서 보면 얘기가 다르다
로직은 공유한다가 아닌 갖다 쓴다의 개념이라 쓸때 context에서 가져오냐 custom에서 가져와서 쓰냐의 차이는 확인이 필요
==============================================================================

피버님, 저희 토의시간에 나눈 주제인데 해결이 안되어서 제가 회의록 적는 김에 정리해서 여쭤봅니다.
1. context와 custom hook 이 둘 랜더링 측면에서의 차이점이 뭘까요? 
또한 둘 다 의존성 주입이자 분리된 파일에 모두가 접근하는 점이 비슷한데 왜 둘이 구분짓나요?
2. lifting the state의 의미가 자식들이 필요한 state를 각자 선언하기 보다 부모에게 선언하고 props로 전달해주는 것인지 아니면
상위에서 하위로 가는 단방향 구조에서 props로 전달해준 set함수를 자식 컴포넌트에서 사용함으로써 부모 state를 변경하는 것인가요?
또한 lift state가 state 최적화와 어떤 상관이 있나요?


lift state의 의미
자식 컴포넌트가 공통된거라면 부모에 선언해서 관리해라?
너무 당연한 얘기 아니냐.. 왜 정의까지 잇는가?
근데 자식들이 같이 쓴다고해서 부모가 안쓰는 state를 부모가 포함해야하나?
컴포넌트 간의 state공유다 자식들이 쓰면 부모에서 같이 내려줘야하는거 아닌가?
*이게 state최적화와 무슨 상관이잇는가?

==============================================================================
react.memo useMemo
남발해도 되나?

react.memo가 나왓는데 자식컴포넌트가 사진을 많이 가지고 잇다. filter링할때 memo를 사용한다. key값만 잘 정해주면 랜더링 막을수잇다.
map에 key값주는거 키값만 잘주면 memo를 사용하는거다?는 아니고 key값과 메모랑 같이 쓰면 최적화할수잇다
키 값만 잘주면 랜더링 최적화인가?

절대적인 시간기준으로 나누기보다 필요하다 생각이 들면 메모이제이션을 하면 되겟다
==============================================================================




*/
