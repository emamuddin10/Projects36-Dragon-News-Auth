import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()

  ],
})

// https://openapi.programming-hero.com/api/news/categories
// https://openapi.programming-hero.com/api/news/category/01
