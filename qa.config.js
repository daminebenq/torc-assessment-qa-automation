const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://duckduckgo.com",
    testUrl: "https://www.football-data.org/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
