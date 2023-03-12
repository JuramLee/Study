// import { applyMiddleware, createStore } from 'redux';
// import { rootReducer } from './@root';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

// export const store = createStore(
// 	rootReducer,
// 	process.env.NODE_ENV === 'development' &&
// 		composeWithDevTools(applyMiddleware(logger)),
// );

//  rootReducer 채우고 -> middleware 설정
//  middleware여러개쓰려면 composeWithDevTools(applyMiddleware([logger, ...])) 이렇게 배열로 넣으면 됨

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './@root';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development', //true false
	middleware: defaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			return [...defaultMiddleware(), logger];
			/* 위와 같이 기존 미들웨어를 깊은 복사 하지 않으면 logger만 남게 다 덮어버림 */
		}
		return defaultMiddleware();
	},
});
