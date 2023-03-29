import { Suspense } from 'react';
import TodoCard from './Card/Card';
import TodoApi from 'apis/todoApi';
import useGetTodo from 'hooks/queries/todo/getTodo';
import useUpdateTodo from 'hooks/queries/todo/update_todo';

function TodoList() {
  const { data: todoList, status, isLoading } = useGetTodo();
  const updateTodo = useUpdateTodo();

  const handleUpdateTodo = async (id, content, state) => {
    updateTodo.mutate({
      id,
      data: { content, state },
    });
    // const { data } = await TodoApi.updatePost(id, { content, state });
    // const newTodoList = [...todoList];
    // const index = newTodoList.findIndex((todo) => todo.id === data.data.id);
    // newTodoList[index] = data.data;
    // setTodoList(newTodoList);
  };

  // const onDeleteTodo = async (id) => {
  //   if (window.confirm('정말 삭제하시겠습니까')) {
  //     const { data } = await TodoApi.deletePost(id);
  //     // setTodoList(todoList.filter((todo) => todo.id !== data.data));

  //     //   await TodoApi.deletePost(id).then((res) => {
  //     //     // res는 삭제될 todoList중 대상이 아닌가?
  //     //     console.log(res);
  //     //     const newTodoList = [...todoList].filter(
  //     //       (item) => item.id !== res.data.data
  //     //     );
  //     //     setTodoList(newTodoList);
  //   }
  // };

  if (!todoList) return null;
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <div>
      {todoList &&
        todoList.data.data.map((todo) => {
          console.log(todo);
          return (
            <TodoCard
              todo={todo}
              // example={'test'}
              handleEdit={handleUpdateTodo}
              // onDelete={onDeleteTodo}
            />
          );
        })}
    </div>
    // </Suspense>
  );
}
export default TodoList;
