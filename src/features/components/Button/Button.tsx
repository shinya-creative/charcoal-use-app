import React from "react";
import styled from "styled-components";

export type ButtonProps = {
  primary?: boolean;
  danger?: boolean;
  size?: "small" | "medium" | "full";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

const getButtonSize = (size: "small" | "medium" | "full") => {
  switch (size) {
    case "small":
      return `
        height: 32px;
        padding: 0 16px;
        font-size: 14px;
        min-width: 80px;
      `;
    case "full":
      return `
        width: 100%;
        height: 48px;
        padding: 0 24px;
        font-size: 16px;
      `;
    default: // medium
      return `
        height: 40px;
        padding: 0 24px;
        font-size: 16px;
        min-width: 120px;
      `;
  }
};

const StyledButton = styled.button<{
  $primary: boolean;
  $danger: boolean;
  $size: "small" | "medium" | "full";
  disabled: boolean;
}>`
  /* 基本スタイル */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999999px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  outline: none;
  text-decoration: none;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.2;

  /* サイズに基づくスタイル */
  ${({ $size }) => getButtonSize($size)}

  /* プライマリ、デンジャー、セカンダリに基づくスタイル */
  ${({ $primary, $danger, disabled, theme }) => {
    if (disabled) {
      return `
        background-color: ${theme.color.surface3};
        color: ${theme.color.text3};
        box-shadow: none;
        pointer-events: none;
      `;
    }

    if ($danger) {
      return `
        background-color: ${theme.color.assertive};
        color: ${theme.color.text5};

        &:hover {
          background-color: ${theme.color.assertive};
          filter: brightness(1.05);
        }

        &:active {
          background-color: ${theme.color.assertive};
          filter: brightness(0.95);
        }

        &:focus-visible {
          box-shadow: 0 0 0 2px ${theme.color.surface1}, 0 0 0 4px ${theme.color.assertive};
        }
      `;
    }

    return $primary
      ? `
        background-color: ${theme.color.brand};
        color: ${theme.color.text5};

        &:hover {
          background-color: ${theme.color.brand};
          filter: brightness(1.05);
        }

        &:active {
          background-color: ${theme.color.brand};
          filter: brightness(0.95);
        }

        &:focus-visible {
          box-shadow: 0 0 0 2px ${theme.color.surface1}, 0 0 0 4px ${theme.color.brand};
        }
      `
      : `
        background-color: ${theme.color.surface1};
        color: ${theme.color.text1};
        border: 1px solid ${theme.color.border};

        &:hover {
          background-color: ${theme.color.surface2};
        }

        &:active {
          background-color: ${theme.color.surface3};
        }

        &:focus-visible {
          box-shadow: 0 0 0 2px ${theme.color.surface1}, 0 0 0 4px ${theme.color.text3};
        }
      `;
  }}

  /* アクセシビリティのための追加スタイル */
  &:focus {
    outline: none;
  }
`;

export const Button = ({
  primary = false,
  danger = false,
  size = "medium",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      $primary={primary}
      $danger={danger}
      $size={size}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
