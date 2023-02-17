import Button from "components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";
import TodoList from "./components/List/TodoList";
import TodoFormModal from "./components/Modal/TodoForm";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
// toast가 보여주는 기능, ToastContainer는 UI

function TodoPage() {

  const [todoList, setTodoList] = useState([
      {
        id: 1,
        title: "example1",
        content: "content1",
        state: false,
      },

  ])

  // 모달창 열고 닫고
  const [ showModal, setShowModal ] = useState(false);
  const onModalOpen = () => {
    setShowModal(true)
  }
  const onModalClose = () => {
    setShowModal(false)
  }



  // ToastMessage
  const onAddTodo = new Promise((resolve) => {
    setTimeout(() => resolve('todo'), 3000);
  });

  const showToastMessage = () => {
    // add버튼이 form태그라서 기본기능 막고 toast.promise띄운다
    // e.preventDefault()는 TodoFormModal에서 props로 받은 함수(#36에서 전달함)를 사용할 때 해줌
    toast.promise(onAddTodo, {
      pending: "TODO LOADING",
      success: "TODO SUCCESS",
      error: "TODO ERROR",
    });
  };





    return (
        <>
        { showModal && <TodoFormModal showToastMessage={showToastMessage} onModalClose={onModalClose}/>}
        <S.Wrapper>
            <S.Container>
            <S.Title>
                List
            </S.Title>
            <S.Content>
                <TodoList todoList={todoList}/>
            </S.Content>
            <S.ButtonBox>
                <Button variant={'primary'} size={'full'} onClick={onModalOpen}>
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