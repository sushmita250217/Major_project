import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import './i18n';
import WeatherApp from './WeatherApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
)
