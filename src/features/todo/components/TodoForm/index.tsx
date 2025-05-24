import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "@/features/components/Button";

const FormContainer = styled.div``;

export const TodoForm = () => {
  return (
    <FormContainer>
      <Link href="/todo/form" passHref legacyBehavior>
        <Button primary label="新しいタスク" />
      </Link>
    </FormContainer>
  );
};
