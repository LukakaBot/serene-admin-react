import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      AutoImport({
        imports: [
          'react',
          'react-router',
        ],
        dts: 'src/types/auto-import.d.ts',
        include: [
          /\.[tj]sx?$/,
          /\.md$/
        ]
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
})
