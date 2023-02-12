import { useState } from "react";

function AddUser({onAddUser}) {

	const [ userName, setUserName] = useState('');
	const onChangeUserName = (e) => {
		setUserName(e.target.value);
	};

	const onClickAddUserbtn = () => {
		onAddUser(userName);
		setUserName('');
	};


	return (
		<>
		<input value={userName} onChange={onChangeUserName}/>
		<button onClick={onClickAddUserbtn}>추가</button>
		</>
	)
}

export default AddUser;

// 함수를 어디에 적어서 어디로 전달해야하는지(선언 위치, props전달하고 받는 구조)
// 받을 때 화살표 함수로 받는것과 그냥 함수명으로 받는 거에 차이
// 함수 쓸 때의 구조
// 