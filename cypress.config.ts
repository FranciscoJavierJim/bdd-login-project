import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import path from "path";

export default defineConfig({
  // 1️⃣ Configuración del reporter y sus opciones
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "login-project Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  // 2️⃣ Configuración E2E
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // Integración del preprocesador Cucumber
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: path.join(
          __dirname,
          "cypress/support/step_definitions"
        ),
      });

      // Preprocesador Esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Integración del Mochawesome Reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});
