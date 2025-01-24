import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  root: './',
  base: '/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  server: {
    port: 3000,
    strictPort: false,
    host: '0.0.0.0',
    open: true,
    hmr: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
      external: [],
      plugins: []
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      platform: 'browser'
    }
  }
});
