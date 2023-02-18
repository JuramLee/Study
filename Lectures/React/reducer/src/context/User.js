import { createContext, useContext, useReducer, useState } from "react";
import { createAction } from '../utils/createAction';

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

export const UserContext = createContext(); // 전역 저장소(store)를 만든 것 state
export const UserDispatchContext = createContext(); // dispatch

export const useUserState = () => useContext(UserContext);
// 이걸 안해주면 매번 저장소를 가져다 쓸 때마다 빈 값 만들어주고 값 저장시켜줘야함..
// UserContext의 리턴값이 빈 저장소가 아니라 값이 채워진 저장소이다
export const useUserDispatch = () => useContext(UserDisPatchContext);

// export const ADD_STATE = "ADD_STATE";
// export const REMOVE_STATE = "REMOVE_STATE";
export const ADD_STATE = createAction('ADD_STATE'); //util 활용
export const REMOVE_STATE = createAction('REMOVE_STATE');

// reducer
const userListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STATE':
      return [...state, { id: action.payload.id, name: action.payload.name }];
    case 'REMOVE_STATE':
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return;
  }
};

const ContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer("", initialState);
  // const [state, setState] = useState(initialState)
  // const [state, dispatch] = useReducer()
  const [state, dispatch] = useReducer(userListReducer, initialState);
  return (
    // <UserContext.Provider value={[state, setState]}>
    //   {children}
    // </UserContext.Provider>
    /* UsetContext라는 저장소에서 {children}에게 권한을 주고 저장소에 initialValue를 채운다 */
    <UserContext.Provider value={state}>
    {/*vale={[state, dispatch || setState ]}로도 전달 가능, 주석아닌 형태는 redux형태*/}
    <UserDisPatchContext.Provider value={dispatch}>{children}</UserDisPatchContext.Provider>
  </UserContext.Provider>
  );
};

export default ContextProvider;
