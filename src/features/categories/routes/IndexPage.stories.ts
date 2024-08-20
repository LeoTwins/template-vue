import type { Meta, StoryObj } from "@storybook/vue3";
import { http, HttpResponse } from 'msw'

import { fn } from "@storybook/test";
import IndexPage from "./IndexPage.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof IndexPage> = {
  title: "Page/category/IndexPage",
  component: IndexPage,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  parameters: {
    msw: {
      handlers: [
        http.get('http://localhost:5173/categories', async () => {
          return HttpResponse.json(
            [
              {
                id: "1",
                name: "hoge"
              }
            ]
          );
        }),
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof IndexPage>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {}
};
