import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "@/features/components/Button";

const FormContainer = styled.div`
  margin-top: 20px;
`;

export const TodoForm = () => {
  return (
    <FormContainer>
      <Link href="/todo/form" passHref legacyBehavior>
        <Button primary label="Go to Todo Form" />
      </Link>
    </FormContainer>
  );
};
