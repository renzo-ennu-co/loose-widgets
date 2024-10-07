import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "potential-weight": "src/widgets/PotentialWeight/render.tsx"
      },
      output: {
        dir: 'output',
        entryFileNames: 'widgets/[name]-[hash].js',
      },
    },
    //outDir: 'dist',  // Output directory for the static website
    emptyOutDir: true,  // Clean output folder before each build
    //watch: {}
  },     
})
