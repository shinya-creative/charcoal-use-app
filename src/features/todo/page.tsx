import React from "react";
import { TodoFilter } from "./components/TodoFilter";
import styled from "styled-components";

const TodoPageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const TodoPageTitle = styled.h1`
  color: ${({ theme }) => theme.color.text1};
  margin-bottom: 16px;
`;

const TodoPageDescription = styled.p`
  color: ${({ theme }) => theme.color.text2};
  margin-bottom: 24px;
`;

export const page = () => {
  return (
    <TodoPageContainer>
      <TodoPageTitle>Todo List</TodoPageTitle>
      <TodoPageDescription>
        Welcome to the Todo List application!
      </TodoPageDescription>
      <TodoFilter />
    </TodoPageContainer>
  );
};
