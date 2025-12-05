const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");    
const { mochawesomeReport } = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  projectId: "2g8uxz",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overWrite: false,
    html: true,
    json: true,
  },
  e2e: {
    retries: {
      runMode: 2,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      on("task", {
        downloadFile: downloadFile, // explicit mapping avoids common errors
        mochawesomeReport: mochawesomeReport,
      });

      return config; // <-- important in Cypress 10+
    },
  },
});
