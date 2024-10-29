import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ineidy.github.io/gestionHospitalaria/"
//  server: {
//    https: {
//      key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
//      cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
//    },
//    host: '0.0.0.0', // Esto permite que el servidor escuche en todas las interfaces
//    port: 3000,      // Cambia el puerto según tus preferencias
//  },
})