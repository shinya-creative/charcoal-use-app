import styled from "styled-components";

const TodoLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.brand};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.color.brand};
    opacity: 0.8;
  }
`;

export const TodoFormLink = () => {
  return <TodoLink href="/todo/form">Go to Todo Form</TodoLink>;
};
