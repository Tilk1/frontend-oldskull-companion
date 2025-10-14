import axios from 'axios'

const isDev = import.meta.env.MODE === 'development'

const API = axios.create({
  baseURL: isDev
    ? import.meta.env.VITE_BACKEND_DEV_URL
    : import.meta.env.VITE_BACKEND_PROD_URL,
  headers: { 'Content-Type': 'application/json' },
})

export default API