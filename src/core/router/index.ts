/* eslint-disable perfectionist/sort-objects */
import { createBrowserRouter } from 'react-router-dom'

import { homeRouter } from '@/home/ui/router'
import { storeRouter } from '@/store/ui/router'

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { Layout } = await import('@/common/ui/layout/Layout')
      return { Component: Layout }
    },
    children: [homeRouter, storeRouter]
  }
])
