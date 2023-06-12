import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [react(), ssr({ prerender: true })],
  ssr: {
    noExternal: ['react-live-runner', 'react-runner', 'react-simple-code-editor', 'prism-react-renderer']
  }
}
