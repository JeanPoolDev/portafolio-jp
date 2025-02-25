import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Portafolio } from './Portafolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portafolio />
  </StrictMode>,
)
