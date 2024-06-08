import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routes } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Dashboard" />
      <Toaster richColors closeButton />
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}
