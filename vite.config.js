import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/log/v1': {
        target: 'ws://localhost:4002', 
        changeOrigin: true,
        ws: true,
      },
    },
  },
})
