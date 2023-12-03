import type { RouteObject } from 'react-router-dom';

import { Home } from '@/home/pages/Home';

export const homeRouter: RouteObject = {
  path: '/',
  element: <Home />
};
