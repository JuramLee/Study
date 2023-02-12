import { useContext, useState } from "react";
import { UserContext, useUserState } from "../../context/User";
import AddUser from "./AddUser";
import UserList from "./UserList";


function User() {

	const [userList, setUserList] = useUserState();
	// 내가 만든 context 사용하겠다
	// 그 context의 value는 state, setState
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
		const deleteUserList = userList.filter((user) => user.id !== id);
		setUserList(deleteUserList);
	}

	const onAddUser = (name) => {
		const newUser = {
			id: userList[userList.length -1].id + 1,
			name,
		};
		setUserList([...userList, newUser])
	}

	return (
		<>
		<UserList onDeleteUser={onDeleteUser}/>
		<AddUser onAddUser={onAddUser}/>
		</>
	)
}

export default User;