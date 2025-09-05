import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MindBridge/', // Use your repo name here for GitHub Pages!
})
