import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
// import ThemeProvider from './theme/Theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
      <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </StrictMode>,
)