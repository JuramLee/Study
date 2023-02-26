import { createAction } from "utils/createAction";

const initialState = [];

export const addTodo = createAction("ADD_TODO");
export const deleteTodo = createAction("DELETE_TODO");
export const updateTodo = createAction("UPDATE_TODO");

const reducer = (state = initialState, action) => {
	// 매개변수로 받은게 없으면 state를 initialstate값으로 하겠다는 의미
	switch(action.type) {
		case "ADD_TODO":
			return [action.payload, ...state];

		case "DELETE_TODO":
			return state.filter((todo) => todo.id !== action.payload);

		case "UPDATE_TODO":
			const newTodo = [...state];
			const index = newTodo.findIndex((todo) => todo.id === action.payload.id);
			newTodo[index].content = action.payload.content;
			newTodo[index].state = action.payload.state;
			return newTodo;
			
		default:
			return state;
	}
}

export default reducer;