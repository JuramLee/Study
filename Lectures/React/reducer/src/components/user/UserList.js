import { useContext } from "react";
import { UserContext, useUserState } from "../../context/User";

function UserList({ onDeleteUser}) {

	// const onDelete = (e) => {
	// 	console.log(e.target.parentNode)
	// 	userList.filter((item) => item.id !== e.target.parentNode.id)

	// }
	const [userList] = useUserState();


	return userList.map((user, index) => (
			<div key={index}>
				{user.id}. {user.name}
				<button onClick={() => onDeleteUser(user.id)}>삭제</button>
			</div>
	));	
}

export default UserList;