import { defineConfig } from 'vite';

// Treat src/ as root; copy public/ as-is; output to dist/
export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'src/index.html',
        about: 'src/about.html',
        contact: 'src/contact.html'
      }
    }
  }
});
