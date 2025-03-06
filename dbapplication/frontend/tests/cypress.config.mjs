// cypress.config.mjs
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Setup node event listeners if needed
    },
    baseUrl: "http://localhost:5173",
  },
});
