import { createContext, useContext, useReducer, useState } from "react";

const initialState = [
  {
    id: 1,
    name: "김성용",
  },
  {
    id: 2,
    name: "구현서",
  },
  {
    id: 3,
    name: "김태기",
  },
  {
    id: 4,
    name: "김민식",
  },
]; // 배열도 객체도 가능

export const UserContext = createContext(); // 전역 저장소(store)를 만든 것

export const useUserState = () => useContext(UserContext);

export const ADD_STATE = "ADD_STATE";
export const REMOVE_STATE = "REMOVE_STATE";

// reducer
const userListReducer = (state, action) => {
  switch (action.type) {
    case ADD_STATE:
      return [...state, { id: action.payload.id, name: action.payload.name }];
    case REMOVE_STATE:
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer("", initialState);
  // const [state, setState] = useState(initialState)
  // const [state, dispatch] = useReducer()
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
