import { useState } from "react";


const useInputs = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	const onChange = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		})); 			// 함수가 아닌 객체다

		/*
		state 불변성 ( = 값이나 상태를 변경할 수 없는것)
		state는 이전 상태값과 비교하여 값이 달라졌는지 확인하고 값이 달라졌으면 랜더링

		object 기준
		이전 참조값과 현재 참조값만을 비교하여 상태 변화를 감지하고 랜더링

		리액트에서 object(배열, 객체)의 원본데이터가 변경되면
		리액트는 상태 변화를 감지할 수 없으므로 깊은 복사를 통하여 새로운 참조값을 생성하고 
		해당 참조값을 가진 오브젝트로 업데이트

		따라서 이렇게 되면 원본데이터 <===> 새로운 참조값 데이터를 비교할 수 있고 화면을 랜더링 할 수 있다

		setValues(vales.content ==='사람') 이렇게 하면 안되고 깊은복사(...prev처럼)해서 가지고 와야함

		이점: 사이드 이펙트(외부효과)의 배제를 통한 예상치 못한 상황(엣지 케이스)를 방지
			리액트에서 state는 하나의 컴포넌트가 참조하는 것이 아니라 굉장히 많은 컴포넌트가 참조할 수 있다
			그러나 한가지 기능을 위하여 state의 값이 수정되면 해당 상태를 참조하고 잇는 다른 컴포넌트에서 예상치 못하는 에러가 발생할 수 있다

		1. 효율적인 상태 업데이트
			얕은 비교를 통해( 객체의 속성값을 일일히 확인하지 않아도) 
			참조값만을 비교하여 상태를 업데이트하기 때문에 코스트를 줄이고 효율적으로 상태를 업데이트 할 수 있다
			즉, 깊은 복사를 통해 얕은 비교가 가능하게 하다(값만 비교가능, 아니면 키값이나 모든 데이터를 비교해야함)

		2. 사이드 이펙트 방지
		*/
	};

	return [values, onChange, setValues];
};

export default useInputs;