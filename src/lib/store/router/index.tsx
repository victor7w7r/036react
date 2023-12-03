import type { RouteObject } from 'react-router-dom';

import { Store } from '@/store/pages/Store';

export const storeRouter: RouteObject = {
  path: '/store',
  element: <Store />
};
