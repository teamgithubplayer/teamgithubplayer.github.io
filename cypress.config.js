const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8082',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
