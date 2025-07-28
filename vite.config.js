import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tai-khan-partnership/',        // ← add this
  plugins: [react()],
  server: { port: 3000 },
  assetsInclude: ['**/*.jpg']
})
