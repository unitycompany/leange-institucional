import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
     rollupOptions: {
       external: [
          "/assets/index-BHhcukG4.js" 
       ],
     },
  },
  plugins: [react()],
  base: "", 
});
