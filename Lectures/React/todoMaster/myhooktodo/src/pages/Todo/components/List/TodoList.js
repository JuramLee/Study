import TodoCard from "./Card/Card";

function TodoList({todoList}) {

  return (
    <div>
      {todoList.map((todo) => {
        return <TodoCard todo = {todo}/>;
      })}
    </div>
  );
}

export default TodoList;
