import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // File-change events are unreliable on this Windows drive; poll instead
    watch: { usePolling: true },
  },
})
