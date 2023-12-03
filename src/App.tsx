import type { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { ThemeProvider } from '@/common/context/ThemeContext';
import { store } from '@/common/store';

import '@/common/styles/global.css';

export const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
