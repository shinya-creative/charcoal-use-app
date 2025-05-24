import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeProvider } from "styled-components";
import { light } from "@charcoal-ui/theme";
import { Button } from "./Button";

// typescriptのエラーを回避し、テーマの型定義の拡張
const extendedTheme = {
  ...light,
  _charcoalExtended: true,
};

const meta = {
  title: "Charcoal/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    primary: { control: "boolean" },
    danger: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "full"],
    },
    disabled: { control: "boolean" },
  },
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <ThemeProvider theme={extendedTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Sedondary",
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: "small",
    label: "Small",
  },
};

export const Medium: Story = {
  args: {
    primary: true,
    size: "medium",
    label: "Medium",
  },
};

export const Full: Story = {
  args: {
    primary: true,
    size: "full",
    label: "Full width",
  },
};

export const Disabled: Story = {
  args: {
    primary: true,
    label: "Disabled",
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    label: "Danger",
  },
};

export const DangerSmall: Story = {
  args: {
    danger: true,
    size: "small",
    label: "Danger Small",
  },
};

export const DangerDisabled: Story = {
  args: {
    danger: true,
    label: "Danger Disabled",
    disabled: true,
  },
};
