import React, { ChangeEvent, useState, createContext, useContext } from "react";
import styled from "styled-components";
import { Button } from "@/features/components/Button";
import { Todo } from "@/features/todo/types/todo";

// スタイル定義
const FormContainer = styled.div`
  margin-bottom: 16px;
`;

const AddTaskForm = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.color.surface1};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TaskArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputArea = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.surface1};
  color: ${({ theme }) => theme.color.text1};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.brand};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.brand}33;
  }
`;

const InputTextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
  background-color: ${({ theme }) => theme.color.surface1};
  color: ${({ theme }) => theme.color.text1};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.brand};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.brand}33;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

// TodoFormの状態を管理するコンテキスト
interface TodoFormContextType {
  showAddForm: boolean;
  newTitle: string;
  newDescription: string;
  setShowAddForm: (show: boolean) => void;
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleAddTodo: () => void;
}

const TodoFormContext = createContext<TodoFormContextType | undefined>(
  undefined
);

// TodoFormProviderコンポーネント
interface TodoFormProviderProps {
  onAddTodo: (todo: Todo) => void;
  children: React.ReactNode;
}

export const TodoFormProvider: React.FC<TodoFormProviderProps> = ({
  onAddTodo,
  children,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTodo = () => {
    if (newTitle.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: newTitle,
      description: newDescription.trim() !== "" ? newDescription : undefined,
      completed: false,
      createdAt: new Date(),
    };

    onAddTodo(newTodo);
    setNewTitle("");
    setNewDescription("");
    setShowAddForm(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value);
  };

  const value = {
    showAddForm,
    newTitle,
    newDescription,
    setShowAddForm,
    handleTitleChange,
    handleDescriptionChange,
    handleAddTodo,
  };

  return (
    <TodoFormContext.Provider value={value}>
      {children}
    </TodoFormContext.Provider>
  );
};

// コンテキストを使用するためのフック
const useTodoForm = () => {
  const context = useContext(TodoFormContext);
  if (context === undefined) {
    throw new Error("useTodoForm must be used within a TodoFormProvider");
  }
  return context;
};

// 「新しいタスク」ボタンコンポーネント
export const TodoFormButton: React.FC = () => {
  const { showAddForm, setShowAddForm } = useTodoForm();

  if (showAddForm) return null;

  return (
    <Button primary label="新しいタスク" onClick={() => setShowAddForm(true)} />
  );
};

// タスク入力フォームコンポーネント
export const TodoFormInput: React.FC = () => {
  const {
    showAddForm,
    newTitle,
    newDescription,
    handleTitleChange,
    handleDescriptionChange,
    handleAddTodo,
    setShowAddForm,
  } = useTodoForm();

  if (!showAddForm) return null;

  return (
    <FormContainer>
      <AddTaskForm>
        <TaskArea>
          <InputArea
            autoFocus
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            placeholder="タスク名"
          />
          <InputTextArea
            value={newDescription}
            onChange={handleDescriptionChange}
            placeholder="詳細（任意）"
          />
          <ButtonArea>
            <Button
              primary
              label="追加"
              size="medium"
              disabled={!newTitle.trim()}
              onClick={handleAddTodo}
            />
            <Button
              label="キャンセル"
              size="medium"
              onClick={() => setShowAddForm(false)}
            />
          </ButtonArea>
        </TaskArea>
      </AddTaskForm>
    </FormContainer>
  );
};
