import styled from "styled-components";

// styled-componentsを使用したコンポーネント
const FilterContainer = styled.div`
  width: 100%;
  border: 1px dashed ${({ theme }) => theme.color.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing[40]}px;
  margin: ${({ theme }) => theme.spacing[16] + `px ` + theme.spacing[0] + `px`};
  text-align: center;
  background-color: ${({ theme }) => theme.color.surface1};
`;

const FilterDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text2};
`;

export const TodoFilter = () => {
  return (
    <FilterContainer>
      <FilterDescription>
        タスクがありません。「新しいタスク」ボタンをクリックして追加してください。
      </FilterDescription>
    </FilterContainer>
  );
};
