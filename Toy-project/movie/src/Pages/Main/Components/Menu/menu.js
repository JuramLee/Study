import styled from 'styled-components';

const Menu = () => {
  return (
    <>
      <S.Wrapper>
        <MenuButtons>
          <span>- popular</span>
          <span>- now</span>
          <span>- upcoming</span>
          <span>- top-rated</span>
        </MenuButtons>
        <Content>
          <div>wnfkawnl@gmail.com</div>
        </Content>
      </S.Wrapper>
    </>
  );
};

export default Menu;

const Wrapper = styled.div`
  width: 20%;
  height: 800px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    line-height: 50px;
    cursor: pointer;
    color: white;
    font-size: 20px;
  }
`;

const Content = styled.div`
  width: 150px;
  height: 400px;
  background-color: grey;
  > div {
    color: white;
  }
`;

const S = {
  Wrapper,
  MenuButtons,
  Content,
};
