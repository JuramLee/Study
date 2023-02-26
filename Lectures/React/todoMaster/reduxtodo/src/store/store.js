import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./@root";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";


export const store = createStore(
	rootReducer,
	process.env.NODE_ENV === "development" && composeWithDevTools(applyMiddleware(logger))
);

//  rootReducer 채우고 -> middleware 설정 
//  middleware여러개쓰려면 composeWithDevTools(applyMiddleware([logger, ...])) 이렇게 배열로 넣으면 됨
