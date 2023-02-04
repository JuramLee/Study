import { useState } from "react";

function UseState() {
  //   let count = 0;

  const [count, setCount] = useState(0);
  // useState는 변수를 react의 state로 관리하는 함수
  // [변수명, 바꿀 수 있는 순수함수] = useState(기본값)
  // let/const 변수명 = 기본값 과 같지만 React State변경해주는것

  const onAddNumber = () => {
	// count++;
	setCount(count + 1);
    // console.log(count);
  };

  const onMinusNumber = () => {
	setCount(count - 1);
    // console.log(count);
    // count--;
  };

  console.log(count)

  return (
    <div>
      <button onClick={onMinusNumber}> - </button>
      {count}
      <button onClick={onAddNumber}> + </button>
    </div>
  );
}

export default UseState;
