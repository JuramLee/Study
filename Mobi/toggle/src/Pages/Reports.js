import React from "react";
import styled from "styled-components";

export const Reports = () => {
  return (
    <Wrapper>
      <h1>Reports</h1>
    </Wrapper>
  );
};

export const ReportsOne = () => {
  return (
    <Wrapper>
      <h1>Reports/reports1</h1>
    </Wrapper>
  );
};

export const ReportsTwo = () => {
  return (
    <Wrapper>
      <h1>Reports/reports2</h1>
    </Wrapper>
  );
};

export const ReportsThree = () => {
  return (
    <Wrapper>
      <h1>Reports/reports3</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  color: white;
  font-weight: 700;
`;
