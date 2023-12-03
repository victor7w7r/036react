import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/common/layout/Layout';

import { homeRouter } from '@/home/router';
import { storeRouter } from '@/store/router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [homeRouter, storeRouter]
  }
]);
