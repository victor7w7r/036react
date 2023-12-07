import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { Layout } = await import('@/common/layout');
      return { Component: Layout };
    }
  }
]);
