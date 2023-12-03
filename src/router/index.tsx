import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/common/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
]);
