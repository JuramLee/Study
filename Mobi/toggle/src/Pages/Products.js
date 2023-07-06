import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper>
      <h1>Products</h1>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  color: white;
  font-weight: 700;
`;
