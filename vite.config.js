import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cortex/",
  server: {
    host: '0.0.0.0'  // or 'localhost' or your desired host
  }
}
)
