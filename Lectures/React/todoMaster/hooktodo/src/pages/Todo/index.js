import Button from "components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";
import TodoList from "./components/List/TodoList";
import TodoFormModal from "./components/Modal/TodoForm";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
// toast가 보여주는 기능, ToastContainer는 UI

export const print = () => {
    console.log('반갑습니다.');
};

function TodoPage() {

  // state
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'title1',
      content: 'content1',
      state: false,
    }
  ])

    
    // toast
  const showAddTodoToastMessage = (title, content) => {
    // add버튼이 form태그라서 기본기능 막고 toast.promise띄운다
    toast.promise(handleAddTodo(title, content), {
      pending: "TODO LOADING",
      success: "TODO SUCCESS",
      error: "TODO ERROR",
    });
  };


  const handleOpenTodoAddModal = () => {
    setIsOpenAddTodoModal(true);
  }
  const handleCloseTodoAddModal = () => {
    setIsOpenAddTodoModal(false);
  }

    // const onAddTodo = new Promise((resolve) => {
    //   setTimeout(() => resolve('todo'), 3000);
    // });
  const handleAddTodo = (title, content) => {
    return new Promise((resolve, reject) => {
      if(!title || !content) {
        return reject('need fulfilled')
      }

      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          title,
          content
        };
        resolve(newTodo)
      }, 1000)
    }).then((res) => {
      // const newTodoList = [...todoList].push(res)
      setTodoList([...todoList, res])
      setIsOpenAddTodoModal(false)
    })
  }

    return (
        <>
        { isOpenAddTodoModal && <TodoFormModal showAddTodoToastMessage={showAddTodoToastMessage} 
        onClose={handleCloseTodoAddModal}/>}
        <S.Wrapper>
            <S.Container>
            <S.Title>
                List
            </S.Title>
            <S.Content>
                <TodoList todoList={todoList} setTodoList={setTodoList}/>
            </S.Content>
            <S.ButtonBox>
                <Button variant={'primary'} size={'full'} onClick={handleOpenTodoAddModal}>
                    추가
                </Button>
            </S.ButtonBox>
            </S.Container>
            <ToastContainer autoClose={2000} theme='colored'/>
        </S.Wrapper>
        </>
    );
}

export default TodoPage;

// export default 되어 있는 경우 경로만 맞으면 내 마음대로 이름을 정해서 가지고 올 수 있고
// export 되어 있는 경우는 {} 구조분해할당을 통해 해당 export된 변수명 혹은 함수명을 이용해서  key값을 가져와야함

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};