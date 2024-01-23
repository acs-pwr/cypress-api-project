const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },

  env: {
    // pembacaan file untuk test api
    // baseUrl: "https://automationexercise.com",
  },
  e2e: {
    setupNodeEvents(on, config) {},
    // pembacaan file untuk test api
    specPattern: "tests/**/*.cy.js",
  },
});
