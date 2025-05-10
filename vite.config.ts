/// <reference types="vitest" />
import * as path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
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
