import { setup, type Preview } from "@storybook/vue3";
import "../src/assets/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { handlers } from "../src/mocks/handlers";

initialize(
  {
    onUnhandledRequest: "bypass",
    serviceWorker: { url: "mockServiceWorker.js" },
  },
  handlers,
)

const preview: Preview = {
  /** storybook用のmockサーバを起動するための記述 */
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [() => ({ template: `<div id="app"><story /></div>` })],
};

export default preview;
