import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: mode === 'production' 
          ? 'https://isbec-backend.onrender.com'
          : 'http://localhost:5000',
        changeOrigin: true,
        secure: mode === 'production'
      }
    }
  }
}));
