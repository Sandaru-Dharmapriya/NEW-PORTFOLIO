import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'NEW-PORFOLIO', // Add this line with your repository name
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
});
