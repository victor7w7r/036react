import '~/styles/global.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/common/context'

import { store } from './core/modules/store-module'
import { router } from './core/router'

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
