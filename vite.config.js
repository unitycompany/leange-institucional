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
  resolve: { dedupe: ['react', 'react-dom'] },
  server: {
    proxy: {
      '/metrics/gtm.js': {
        target: 'https://www.googletagmanager.com',
        changeOrigin: true,
        rewrite: p => p.replace('/metrics/gtm.js', '/gtm.js'),
      },
      '/metrics/ns.html': {
        target: 'https://www.googletagmanager.com',
        changeOrigin: true,
        rewrite: p => p.replace('/metrics/ns.html', '/ns.html'),
      },
      '/metrics/g/collect': {
        target: 'https://www.google-analytics.com',
        changeOrigin: true,
        rewrite: p => p.replace('/metrics/g/collect', '/g/collect'),
      },
      // opcional: proxy também os pings do consent mode
      '/metrics/ccm/collect': {
        target: 'https://www.google.com',
        changeOrigin: true,
        rewrite: p => p.replace('/metrics/ccm/collect', '/ccm/collect'),
      },
    },
  },
  plugins: [react()],
  base: "/", 
});
