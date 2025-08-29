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
      // /metrics/gtm.js?id=... -> https://www.googletagmanager.com/gtm.js?id=...
      '/metrics/gtm.js': {
        target: 'https://www.googletagmanager.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/metrics/gtm.js', '/gtm.js'),
      },
      // /metrics/ns.html?id=... -> https://www.googletagmanager.com/ns.html?id=...
      '/metrics/ns.html': {
        target: 'https://www.googletagmanager.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/metrics/ns.html', '/ns.html'),
      },
      // /metrics/g/collect -> https://www.google-analytics.com/g/collect
      '/metrics/g/collect': {
        target: 'https://www.google-analytics.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/metrics/g/collect', '/g/collect'),
      },
      // (Opcional) outros endpoints (Ads/Floodlight) seguindo o mesmo padrão
      // '/metrics/pagead/1p-conversion': {
      //   target: 'https://googleads.g.doubleclick.net',
      //   changeOrigin: true,
      //   rewrite: (p) => p.replace('/metrics', ''),
      // },
    },
  },
  plugins: [react()],
  base: "/", 
});
