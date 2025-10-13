import React from 'react'
import { createRoot } from 'react-dom/client'
import { setupConfig } from '@ionic/core'
import App from './App'

setupConfig({
  mode: 'ios'
  //mode: 'md'
})

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
