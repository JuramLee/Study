import Button from 'components/Button/Button';
import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';
import TodoList from './components/List/TodoList';
import TodoFormModal from './components/Modal/TodoForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { useRecoilState } from 'recoil';
import { addModalAtom } from 'atoms/ui.atom';
import useGetTodo from 'hooks/queries/todo/getTodo';
import useAddTodo from 'hooks/queries/todo/add_todo';
import { Suspense } from 'react';

export const print = () => {
  console.log('반갑습니다');
};

function TodoPage() {
  // state
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] =
    useRecoilState(addModalAtom); // 전역상태 관리 완료
  // const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);

  const { mutate } = useAddTodo();
  // console.log(status, isLoading);

  // toast
  const handleAddTodo = async (title, content) => {
    if (!title || !content) {
      return alert('빈칸을 채워주세요');
    }
    const data = await new Promise((resolve, reject) => {
      if (!title || !content) {
        alert('빈칸을 채워주세요');
        return reject();
      }
      const newTodo = {
        title,
        content,
      };
      resolve(newTodo);
    });
    mutate(data);
    handleCloseTodoAddModal();
  };

  const showAddTodoToastMessage = (title, content) => {
    toast.promise(handleAddTodo(title, content), {
      pending: 'TODO LOADING',
      success: 'TODO SUCCESS',
      error: 'TODO ERROR',
    });
  };

  // handle
  const handleOpenTodoAddModal = () => {
    setIsOpenAddTodoModal(true);
  };

  const handleCloseTodoAddModal = () => {
    setIsOpenAddTodoModal(false);
  };

  return (
    <>
      {isOpenAddTodoModal && (
        <TodoFormModal
          showAddTodoToastMessage={showAddTodoToastMessage}
          onClose={handleCloseTodoAddModal}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <Suspense fallback={<div>로딩중...</div>}>
              <TodoList />
            </Suspense>
          </S.Content>
          <S.ButtonBox>
            <Button
              variant={'primary'}
              size={'full'}
              onClick={handleOpenTodoAddModal}>
              추가
            </Button>
          </S.ButtonBox>
        </S.Container>
        <ToastContainer autoClose={2000} theme='colored' />
      </S.Wrapper>
    </>
  );
}
export default TodoPage;

// const test = 'test';
// export default test;
// export default 되어있는 경우 경로만 맞으면 내 마음대로 이름을 정해서 가지고 올 수 있구요
// export 되어있는 경우는 {} 구조분해할당을 통해 해당 export된 변수명 혹은 함수명 등을 이용해여 key값으로 가지고온다

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
