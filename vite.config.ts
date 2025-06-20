/// <reference types="vitest" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.tsx',
    include: ['src/**/__tests__/**/*.[jt]s?(x)'],
    coverage: {
      provider: 'v8',
      exclude: ['tests/**', '**/*.d.ts', '**/*.config.[jt]s', 'src/main.tsx', 'src/routes/*'],
    },
  },
});
