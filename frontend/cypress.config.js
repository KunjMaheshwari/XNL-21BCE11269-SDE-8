import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false, // Disables support file
    baseUrl: "http://localhost:5173", // Update if necessary,
    specPattern: "cypress/e2e/test.cy.js",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
