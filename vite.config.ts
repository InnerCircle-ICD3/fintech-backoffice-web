import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import * as path from 'node:path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 핵심 설정: @ -> src
    },
  },
});
