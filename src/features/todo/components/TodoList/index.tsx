import React from "react";
import styled from "styled-components";
import { Todo } from "@/features/todo/types/todo";
import { TodoItem } from "../TodoItems";

const ListContainer = styled.div`
  margin-top: 20px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.text3};
  padding: 20px;
  font-style: italic;
`;

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDeleteTodo?: (id: string) => void;
  onEditTodo?: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  onDeleteTodo,
  onEditTodo,
}) => {
  if (todos.length === 0) {
    return (
      <EmptyMessage>
        タスクがありません。新しいタスクを追加してください。
      </EmptyMessage>
    );
  }

  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
      ))}
    </ListContainer>
  );
};
