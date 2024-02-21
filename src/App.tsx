import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from './core/router'
import { store } from './core/modules/store-module'
import { ThemeProvider } from '@/common/context'

import '@core/styles/global.css'

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
