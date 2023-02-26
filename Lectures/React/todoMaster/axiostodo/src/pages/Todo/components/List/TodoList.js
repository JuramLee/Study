import TodoCard from './Card/Card';

function TodoList({todoList, setTodoList}) {



    const handleUpdateTodo = (id, content, state) => {

    }

    const onDeleteTodo = (id) => {
        if(window.confirm("정말 삭제하시겠습니까")){

        }
    }
console.log(todoList);
    return (
        <div>
            {todoList.map((todo) => {
                console.log(todo);
                return <TodoCard 
                    todo={todo} 
                    example={'test'} 
                    handleEdit={handleUpdateTodo} 
                    onDelete={onDeleteTodo}
                />;
            })}

        </div>
    );
}
export default TodoList;
