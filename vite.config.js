import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' so the built page works from any folder, which is how Olive will host it.
export default defineConfig({
  plugins: [react()],
  base: './',
});
