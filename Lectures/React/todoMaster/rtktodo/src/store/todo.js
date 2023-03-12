import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	todos: [],
	addTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	getTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	updateTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	deleteTodoState: {
		loading: false,
		done: false,
		err: null,
	},
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	extraReducers: builder => {
		// add todo
		builder.addCase(addTodo.pending, state => {
			state.addTodoState.loading = true;
		});
		builder.addCase(addTodo.fulfilled, (state, action) => {
			state.todos.unshift(action.payload);
			state.addTodoState.loading = false;
			state.addTodoState.done = true;
			state.addTodoState.error = null;
		});
		builder.addCase(addTodo.rejected, (state, action) => {
			state.addTodoState.loading = false;
			state.addTodoState.done = true;
			state.addTodoState.error = action.payload;
		});

		// get todo
		// update todo
		// delete todo
	},
});

export const addTodo = createAsyncThunk('todo/addTodo', async todo => {
	const res = await axios.post('/api/todo', todo);
	return res.data;
});

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
	return null;
});
export const updateTodo = createAsyncThunk('todo/updateTodo', async () => {
	return null;
});
export const deleteTodo = createAsyncThunk('todo/deleteTodo', async () => {
	return null;
});

/*
dispatch(요청) - 미들웨어(thunk) - dispatch(대기) - reducer (o) - 대기중에 맞는 비즈니스 로직 실행(loading=true)
	---비동기 종료후
미들웨어 - dispatch(성공/실패) - reducer(o) - 성공이나 실패 비즈니스 로직 실행
*/
