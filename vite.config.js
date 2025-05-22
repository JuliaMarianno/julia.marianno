import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
  build: {
    sourcemap: false, // Não gera source maps em produção
  },
})
