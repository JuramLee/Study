import styled from "styled-components";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>NETFLEX</HeaderLogo>
        <HeaderSearch>
          <SearchBar></SearchBar>
          <SearchButton>
            <img src="Assets/search_icon.png"></img>
          </SearchButton>
        </HeaderSearch>
        <span>now | upcoming | top-rated</span>
      </HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 768px;
  padding: 50px 100px;
  background-color: black;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;

const HeaderLogo = styled.div`
  color: white;
  font-size: 45px;
  font-weight: bold;
`;

const HeaderSearch = styled.div`
  display: flex;
`;

const SearchBar = styled.input`
  width: 700px;
  height: 50px;
  background-color: white;
  border: none;
  padding-left: 20px;
  font-size: 15px;
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.div`
  width: 70px;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 30px;
    background: none;
  }
`;

const HeaderMenu = styled.div`
  width: 300px;
`;

const S = {
  HeaderWrapper,
  HeaderMenu,
};
