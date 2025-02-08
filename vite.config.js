import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Enable specific polyfills if needed
      protocol: true,
      fs: true, // Optional, use if you need fs and path polyfills
    }),
  ],
  server:{
    port: 6969
  },
  define: {
    global: 'globalThis', // Polyfill for 'global'
  },
});
