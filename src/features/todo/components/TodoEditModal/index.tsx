import React, { ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@/features/components/Button";
import { Todo } from "@/features/todo/types/todo";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.color.surface1};
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.color.text1};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text3};

  &:hover {
    color: ${({ theme }) => theme.color.text1};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text2};
`;

const Input = styled.input`
  width: 100%;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  background-color: ${({ theme }) => theme.color.surface1};
  color: ${({ theme }) => theme.color.text1};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.brand};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.brand}33;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

interface TodoEditModalProps {
  todo: Todo | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTodo: Todo) => void;
}

export const TodoEditModal: React.FC<TodoEditModalProps> = ({
  todo,
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // todoが変更されたときに、フォームの値を更新
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || "");
    }
  }, [todo]);

  if (!isOpen || !todo) return null;

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (!title.trim()) return;

    const updatedTodo: Todo = {
      ...todo,
      title,
      description: description.trim() ? description : undefined,
      updatedAt: new Date(),
    };

    onSave(updatedTodo);
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>タスクを編集</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <FormGroup>
          <Label htmlFor="title">タスク名</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="タスク名を入力"
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">詳細（任意）</Label>
          <TextArea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="詳細を入力（任意）"
          />
        </FormGroup>
        <ButtonGroup>
          <Button label="キャンセル" onClick={onClose} />
          <Button
            primary
            label="保存"
            onClick={handleSubmit}
            disabled={!title.trim()}
          />
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};
