import React from "react";
import { TodoFilter } from "./components/TodoFilter";
import { TodoForm } from "./components/TodoForm";
import styled from "styled-components";

const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TodoPageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
`;

const TodoPageTitle = styled.h1`
  color: var(--charcoal-text1);
`;

export const TodoPage = () => {
  return (
    <TodoPageContainer>
      <TodoHeader>
        <TodoPageTitle>Todo List</TodoPageTitle>
        <TodoForm />
      </TodoHeader>
      <TodoFilter />
    </TodoPageContainer>
  );
};
