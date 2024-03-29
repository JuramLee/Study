import { useState, useReducer } from "react";
import { countReducer } from "../../reducer/count";

function Counter() {
//   const [count, setCount] = useState(0);
const [count, dispatch] = useReducer(countReducer, 0);

  const onIncrementCount = () => {
    // setCount(count + 1);
	dispatch({
		type: 'INCREMENT',
		count: 1,
	});
  };

  const onDecrementCount = () => {
    // setCount(count - 1);
	dispatch({
		type: 'DECREMENT',
		count: 1,
	});
  };

  /* useReducer의 역할은 복잡한 상태 업데이트의 로직을 컴포넌트 안에서 관리하지 말고 바깥에 따로 빼서 관리할 수 있도록 하자

  flux 패턴 > action 객체를 dispatcher를 통해 store(reducer)에 전달하여 비즈니스 로직(기능)을 실행한다 */


  return(
  <>
    <button onClick={onDecrementCount}>-</button>
    {count}
    <button onClick={onIncrementCount}>+</button>
  </>
  );
}

export default Counter;
