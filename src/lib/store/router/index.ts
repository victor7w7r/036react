import type { RouteObject } from 'react-router-dom';

export const storeRouter: RouteObject = {
  path: '/store',
  async lazy() {
    const { Store } = await import('@/store/pages/Store');
    return { Component: Store };
  }
};
