import React from "react";
import styled from "styled-components";

export const Messages = () => {
  return (
    <Wrapper>
      <h1>Messages</h1>
    </Wrapper>
  );
};

export const MessagesOne = () => {
  return (
    <Wrapper>
      <h1>MessagesOne</h1>
    </Wrapper>
  );
};

export const MessagesTwo = () => {
  return (
    <Wrapper>
      <h1>MessagesTwo</h1>
    </Wrapper>
  );
};

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
