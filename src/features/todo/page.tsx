import React from "react";
import { TodoFilter } from "./components/TodoFilter";
import { TodoForm } from "./components/TodoForm";
import styled from "styled-components";

const TodoPageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const TodoPageTitle = styled.h1`
  color: var(--charcoal-text1);
  margin-bottom: 16px;
`;

const TodoPageDescription = styled.p`
  color: var(--charcoal-color-text-tertiary-default);
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
      <TodoForm />
    </TodoPageContainer>
  );
};
