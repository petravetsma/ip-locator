import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), svgr(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})
