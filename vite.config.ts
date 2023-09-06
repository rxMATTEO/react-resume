import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescriptChecker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    typescriptChecker({ typescript: true }),
  ],
  server: {
    port: 3000,
  },
});
