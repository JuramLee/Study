## 타입 narrowing 후 자동완성 연습

```jsx
export enum TodoEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export type TodoDataBase =
  | {
      type: TodoEnum.DAILY;
      content: string;
      title: string;
    }
  | {
      type: TodoEnum.WEEKLY;
      total: Date;
    }
  | {
      type: TodoEnum.MONTHLY;
      goal: string;
    };

// = TodoEnum은 사용자가 타입을 지정하지 않았을 때를 대비하여 기본값을 주기 위한 코드
// 기본값은 TodoEnum 타입으로 추론됨
export type TodoType<T extends TodoEnum = TodoEnum> = Extract<
  TodoDataBase,
  { type: T }
>;

```

```
Extract는?
첫번째 인자로는 후보군들이 오고, 두번째 인자로는 추출할 타입이 온다

  type Test = string | number | boolean;
  type BoolTest = Extract<Test, boolean>;

  const isOkay:BoolTest = true;

그렇다면 위 코드는
TodoDataBase에서 type 속성값이 제네릭타입과 동일한 타입을 갖는다.
```

### interface

```jsx
import axios from "axios";
import { TodoEnum, TodoType } from "../types/todo";

export interface ITodoApi {
  getTodo<T extends TodoEnum>(): Promise<TodoType<T>>;
}

export const TodoApi: ITodoApi = {
  async getTodo<T extends TodoEnum>() {
    const res = await axios.get<TodoType<T>>("/");
    return res.data;
  },
};

const weeklyTodo = await TodoApi.getTodo<TodoEnum.WEEKLY>();
```

### generic

```jsx
// generic
import axios from "axios";
import { TodoEnum, TodoType } from "../types/todo";

export const TodoApi = {
  async getTodo<T extends TodoEnum>() {
    const res = await axios.get<TodoType<T>>("/");
    return res.data;
  },
};

// const dailyTodo = TodoApi.getTodo<TodoEnum.DAILY>();
// dailyTodo. => TodoApi.getTodo가 비동기 함수라서 await을 적어줘야함.
// 그렇지 않으면 자동완성에 Symbol, finally, catch, then이 자동완성에 뜬다.
const dailyTodo = await TodoApi.getTodo<TodoEnum.DAILY>();

```
