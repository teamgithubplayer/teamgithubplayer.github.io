const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://teamgithubplayer.github.io/index.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
