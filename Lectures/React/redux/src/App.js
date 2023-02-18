import { createStore } from "redux";
import {Provider} from 'react-redux';
import User from "./components/user";
import { rootReducer } from "./reducer";
import reduxConfig from "./store/store";

function App() {

  // const store = createStore(rootReducer);
  const store = reduxConfig();
  // 더 쉬운 기능 있는데 왜 이거 쓰냐,,란 의미로 줄그어져있음
  console.log(process.env.NODE_ENV);
  /*
  1. development (npm start)
    개발자용
  2. production
    npm build 이후에 생성된(번들링 된) 실제 사용자가 보게 될 화면
  */

  /*
  1. rootReducer 파일을 생성
      reducer는 여러 파일이 생성될 수 있으므로 reducer들을 하나로 합칠 rootReducer가 핗요하다

  2. 비어있는 store 생성
      createStore()

  3. store에 reducer를 채워놨다
      createStore(rootReducer)

  4. Provider를 생성 app.js에 씌워줌 그리고 store 속성에 내가 만든 store 전달
  */

  return (
    <Provider store={store}>
      <User />
</Provider>
  );
}

export default App;
