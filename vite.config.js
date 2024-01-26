import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './', '');
  const envExternal = dotenv.config({ path: env.PATH_TO_ENV }).parsed;
  
  return {
    define: {
      ...envExternal,
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
