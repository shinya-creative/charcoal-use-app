import React from "react";
import styled from "styled-components";

// styled-componentsを使用したコンポーネント
const FilterContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: ${({ theme }) => theme.color.surface1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.color.brand : theme.color.border)};
  background-color: ${({ theme, active }) =>
    active ? `${theme.color.brand}22` : theme.color.surface1};
  color: ${({ theme, active }) =>
    active ? theme.color.brand : theme.color.text2};
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? `${theme.color.brand}33` : theme.color.surface2};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.brand}33;
  }
`;

const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text1};
  margin-right: 8px;
`;

interface TodoFilterProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <FilterContainer>
      <FilterTitle>フィルター:</FilterTitle>
      <FilterButton
        active={currentFilter === "all"}
        onClick={() => onFilterChange("all")}
      >
        すべて
      </FilterButton>
      <FilterButton
        active={currentFilter === "active"}
        onClick={() => onFilterChange("active")}
      >
        未完了
      </FilterButton>
      <FilterButton
        active={currentFilter === "completed"}
        onClick={() => onFilterChange("completed")}
      >
        完了済み
      </FilterButton>
    </FilterContainer>
  );
};
