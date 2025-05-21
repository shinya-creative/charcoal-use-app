import styled from "styled-components";

// styled-componentsを使用したコンポーネント
const FilterContainer = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
`;

const FilterTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.text1};
`;

const FilterDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text2};
`;

export const TodoFilter = () => {
  return (
    <FilterContainer>
      <FilterTitle>Todo Filter</FilterTitle>
      <FilterDescription>Filter your todos here!</FilterDescription>
    </FilterContainer>
  );
};
