import { useContext, useState } from "react";
import { ADD_STATE, useUserDispatch, REMOVE_STATE, useUserState } from "../../context/User";
import AddUser from "./AddUser";
import UserList from "./UserList";


function User() {

	const [userList, setUserList] = useUserState();
	// const userList = useContext(UserContext);를 구조분해할당해준것
    // const [userList, setUserList] = useContext(UserContext);
	// 내가 만든 context 사용하겠다
	// 그 context의 value는 [state, setState](useContext(UserContext)의 리턴값)


	// const [userList, setUserList] = useState([
	// 	{
	// 		id: 1,
	// 		name: '김성용',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: '구현서',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: '김태기',
	// 	},
	// 	{
	// 		id: 4,
	// 		name: '김민식',
	// 	},
	// ]);

	/*
	실습
		삭제 버튼을 누르면 해당 유저는 삭제되고
		추가 버튼을 누르면 최하단에 유저가 추가된다
	*/

	// const onDelete = (e) => {
	// 	return setUserList = userList.filter((item) => {
	// 		console.log(item.id)
	// 		item.id !== e.target.parentNode.id
	// 	})
	// }

	const onDeleteUser = (id) => {
		// const deleteUserList = userList.filter((user) => user.id !== id);
		// setUserList(deleteUserList);
		// dispatch({
		// 	type: REMOVE_STATE,		// util로 만든거 활용
		// 	payload: {				// User.js에서 만든 변수가 리턴값이 함수이고 그 함수 매개변수로 값 전달하면 payload로 저장됨
		// 		id,
		// 	}
		// })
		dispatch(REMOVE_STATE({ id }));
	}

	const onAddUser = (name) => {
		// const newUser = {
		// 	id: userList[userList.length -1].id + 1,
		// 	name,
		// };
		// setUserList([...userList, newUser])
		const id = userList[userList.length - 1].id + 1;
		dispatch(ADD_STATE({ id, name }));
	}

	return (
		<>
		<UserList onDeleteUser={onDeleteUser}/>
		<AddUser onAddUser={onAddUser}/>
		</>
	)
}

export default User;