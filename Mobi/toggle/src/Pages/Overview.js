import React from "react";
import styled from "styled-components";

export const Overview = () => {
  return (
    <Wrapper>
      <h1>Overview</h1>
    </Wrapper>
  );
};

export const Users = () => {
  return (
    <Wrapper>
      <h1>Users</h1>
    </Wrapper>
  );
};

export const Revenue = () => {
  return (
    <Wrapper>
      <h1>Revenue</h1>
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
