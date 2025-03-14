import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://usermanagement-sable-psi.vercel.app/",
    supportFile: false,
  },
});