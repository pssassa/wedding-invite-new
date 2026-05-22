import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    // Добавили типы для параметров
    resolveId(id: string, importer?: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
      // Важно: возвращаем null, если id не наш плагин
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

export default defineConfig({
  // 👇 Замени "имя-твоего-репозитория" на реальное название репо
  base: process.env.NODE_ENV === 'production' ? '/wedding-invite-new/' : '/',
  
  plugins: [/* твои плагины */],
  resolve: { /* ... */ },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
