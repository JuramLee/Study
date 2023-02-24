const { createContext, useReducer, useContext } = require("react");

const initialState = [
      {
      id: 1,
      title: 'title1',
      content: 'content1',
      state: false,
    }
];

export const TodoListContext = createContext();
export const TodoDispatchContext = createContext();

export const useTodoList = () => useContext(TodoListContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      /*
		ADD_TODO를 하기위해
		action.payload에 어떤 데이터가 와야할까? 
		{title, content}
		{id}
		{res?}
		*/

      return [action.payload, ...state];
    case "DELETE_TODO":
      //   return state.filter((todo) => todo.id !== action.payload);
      // 객체로 안보내도 된다
      return state.filter((todo) => todo.id !== action.payload.id);
    case "UPDATE_TODO":
      const newTodo = [...state];
      const todoIndex = newTodo.findIndex(
        (todo) => todo.id === action.payload.id
      );
      newTodo[todoIndex].content = action.payload.content;
      newTodo[todoIndex].state = action.payload.state;
      return newTodo;
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  //children은 하위 모든 컴포넌트
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoListContext.Provider value={todoList}>
      <TodoDispatchContext value={dispatch}>{children}</TodoDispatchContext>
    </TodoListContext.Provider>
  );
};

export default TodoProvider;
