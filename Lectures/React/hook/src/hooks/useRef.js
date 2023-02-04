import { useRef, useState } from "react";

// let count = 0; 이렇게 함수 밖에 빼두면 리랜더링 안한다 useRef같이

function UseRef() {
	const HTMLRef = useRef(null);
	const count = useRef(0);
	const [ isShow, setIsShow ] = useState(false);

	const onChangeColor = () => {
		HTMLRef.current.style.color = 'red';
		count.current++;
	};

	const onShowTadaBtn = () => {
		setIsShow((show) => !show); //이전 값을 가지고와서 불릴때마다 값 바꾸기 true/false
		// prev는 set함수 인자의 callback함수 반환값 / 현재 가지고 있는 state 함수의 값
	};

	console.log(count);

	return (
		<>
			{isShow && <div>Tada!</div>}
			<div ref={HTMLRef}>COLORS</div>
			<button onClick={onChangeColor}>색상 변경 / 카운트 추가</button>
			<button onClick={onShowTadaBtn}>SHOW</button>		{/*강제랜더링용*/}
		</>
	);
};

export default UseRef;