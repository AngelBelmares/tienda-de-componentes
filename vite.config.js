import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/' // Ruta a tu archivo HTML
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-router-dom': 'react-router-dom'
    }
  }
})
