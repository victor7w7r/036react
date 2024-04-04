/* eslint-disable perfectionist/sort-objects */
import { createBrowserRouter } from 'react-router-dom'

import { homeRouter } from '@/home/router'
import { storeRouter } from '@/store/router'

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { Layout } = await import('@/common/layout')
      return { Component: Layout }
    },
    children: [homeRouter, storeRouter]
  }
])
