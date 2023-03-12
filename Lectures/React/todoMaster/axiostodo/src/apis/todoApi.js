const { Axios } = require("./core")

const TODO = '/todo';

const TodoApi = {
	addPost({content, title}) {
		return Axios.post(TODO, {content, title});
	},
	getPost() {
		return Axios.get(TODO);
	},
	updatePost(id, {content, state}) {
		return Axios.put(TODO + `/${id}`, { content, state });
	},
	deletePost(id) {
		return Axios.delete(TODO + `/${id}`);
	}
};

export default TodoApi;

/*
이 페이지를 제작하기 위한 api 정리
1.  axios.get('/todo');  					return -> todolist 전체
	axios.post('/todo', {content, title}) 	return -> {todo} 추가된 데이터
	axios.put('/todo', {content, state}) 	return -> {update todo}
	axios.delete('/todo/$id')  				return -> 삭제된 id

2.  사용자가 todo페이지에 접속했다
	페이지에 랜더링 되어야하는 것은?  todoList -> axios.get
	화면이 랜더링 될 때마다 axios 새로 가지고 와야할까? -> 아니오.
	단, todoList는 state로 관리되어야할까요? -> 예 -> useState로 관리

	axios를 사용할 타이밍 고민
	페이지가 처음 열렸을 때 -> useEffect
*/