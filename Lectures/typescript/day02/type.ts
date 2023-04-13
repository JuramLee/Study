// Partial
interface Person {
  name: string;
  age: number;
  height?: number;
}

const person: Partial<Person> = {
  name: "이주람",
};

// Partial 쓰면 안에 모든 type들이 ?이 되버린다
// 상태가 굉장히 유연할 때 return에 주로 Partial을 쓴다

const user: Person = {
  age: 20,
  name: "ㅇㅇㅇ",
};

// omit 제외하고 가져오기
const userWithoutAge: Omit<Omit<Person, "age">, "name"> = {
  //   name: "ㅁㅁㅁ",
  height: 190,
};

// pick 제거가 아닌 선택해서 가져오기
const userWithAge: Pick<Person, "age" | "height"> = {
  age: 20,
  height: 200,
};

// Returntype

enum TodoState {
  Todo,
  Complete,
}

type Todo = {
  id: number;
  state: TodoState;
  title: string;
  content: string;
};

export const useTodo = () => {
  const todoState: Todo[] = [
    // type[]하면 type값을 갖는 배열
    {
      content: "21",
      id: 1,
      state: TodoState.Todo,
      title: "4512",
    },
  ];

  const handleAddTodo = () => {};
  const handleDeleteTodo = () => {};
  return {
    todoState,
    handleAddTodo,
    handleDeleteTodo,
  };
};

const todo = useTodo();

const todoController = (todo: ReturnType<typeof useTodo>) => {
  console.log(todo.todoState);
  // ...비즈니스로직..
};

todoController(todo);
