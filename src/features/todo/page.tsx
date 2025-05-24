import React, { useState } from "react";
import { TodoFilter } from "./components/TodoFilter";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Todo } from "./types/todo";
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
  color: ${({ theme }) => theme.color.text1};
`;

const TodoStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.surface1};
  border-radius: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.text2};
`;

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  // TODOアイテムを追加する関数
  const handleAddTodo = (newTodo: Todo) => {
    setTodos([newTodo, ...todos]);
  };

  // TODOアイテムの完了状態を切り替える関数
  const handleToggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  // TODOアイテムを削除する関数
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // TODOアイテムを編集する関数
  const handleEditTodo = (id: string) => {
    setEditingTodoId(id);
    // 実際の編集機能は今回は実装しません
    // 通常はモーダルやフォームを表示して編集を行います
    alert(`ID: ${id} のタスクを編集します（この機能は未実装です）`);
  };

  // フィルターに基づいてTODOアイテムをフィルタリングする関数
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"の場合はすべて表示
  });

  // フィルターを変更する関数
  const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
    setFilter(newFilter);
  };

  // 統計情報
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <TodoPageContainer>
      <TodoHeader>
        <TodoPageTitle>Todo List</TodoPageTitle>
        <TodoForm onAddTodo={handleAddTodo} />
      </TodoHeader>
      <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      <TodoList
        todos={filteredTodos}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
      {totalTodos > 0 && (
        <TodoStats>
          <span>全タスク: {totalTodos}</span>
          <span>完了: {completedTodos}</span>
          <span>未完了: {activeTodos}</span>
        </TodoStats>
      )}
    </TodoPageContainer>
  );
};
