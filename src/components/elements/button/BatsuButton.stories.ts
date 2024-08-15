import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import BatsuButton from "./BatsuButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BatsuButton> = {
  title: "Element/button/BatsuButton",
  component: BatsuButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
  args: {}
};

export default meta;
type Story = StoryObj<typeof BatsuButton>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {}
};
