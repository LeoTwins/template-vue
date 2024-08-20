import type { Meta, StoryObj } from "@storybook/vue3";
import { http, HttpResponse } from 'msw'

import { fn } from "@storybook/test";
import TodoListPage from "./TodoListPage.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof TodoListPage> = {
  title: "Page/todo/list/TodoListPage",
  component: TodoListPage,
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
                name: "fishing"
              },
              {
                id: "2",
                name: "study"
              }
            ]
          );
        }),
        http.get('http://localhost:5173/todo', async () => {
          return HttpResponse.json(
            [
              {
                id: 8981842260656128,
                name: "ヤマシタのエギを買う",
                category: {
                  id: 8998556985720832,
                  name: "fishing"
                },
                dueDate: "1990-01-01",
                done: false
              },
              {
                id: 3112534305406976,
                name: "イカを１杯釣る",
                category: {
                  id: 2821716952743936,
                  name: "fishing"
                },
                dueDate: "1990-01-01",
                done: true
              },
              {
                id: 3112534305406976,
                name: "弁当用の箸を買う",
                category: {
                  id: 2821716952743936,
                  name: "common"
                },
                dueDate: "2024-10-18",
                done: true
              },
            ]
          );
        }),
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof TodoListPage>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {}
};
