import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// eslint-disable-next-line no-undef
const dependencies = require("./package.json")?.dependencies;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        BillData: "./src/App.jsx",
      },
      shared: [dependencies],
    }),
  ],
});
