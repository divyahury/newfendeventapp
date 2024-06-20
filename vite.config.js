import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import flowbitePlugin from 'flowbite/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        flowbitePlugin,
        // Other PostCSS plugins may be listed here
      ]
    }
  }
})
