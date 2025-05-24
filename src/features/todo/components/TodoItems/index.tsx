import React from "react";
import styled from "styled-components";
import { Todo } from "@/features/todo/types/todo";
import { Button } from "@/features/components/Button";

const TodoItemContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.surface1};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`;

const TodoCheckbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.color.brand};
`;

const TodoContent = styled.div`
  flex: 1;
`;

const TodoTitle = styled.h3<{ completed: boolean }>`
  margin: 0 0 4px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.text1};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
`;

const TodoDescription = styled.p<{ completed: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.color.text2};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
`;

const TodoDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text3};
  margin-left: 8px;
`;

const TodoActions = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 16px;
`;

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
  return (
    <TodoItemContainer completed={todo.completed}>
      <TodoCheckbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <TodoContent>
        <TodoTitle completed={todo.completed}>{todo.title}</TodoTitle>
        {todo.description && (
          <TodoDescription completed={todo.completed}>
            {todo.description}
          </TodoDescription>
        )}
      </TodoContent>
      <TodoDate>{new Date(todo.createdAt).toLocaleDateString()}</TodoDate>
      {(onDelete || onEdit) && (
        <TodoActions>
          {onEdit && (
            <Button size="small" label="編集" onClick={() => onEdit(todo.id)} />
          )}
          {onDelete && (
            <Button
              danger
              size="small"
              label="削除"
              onClick={() => onDelete(todo.id)}
            />
          )}
        </TodoActions>
      )}
    </TodoItemContainer>
  );
};
