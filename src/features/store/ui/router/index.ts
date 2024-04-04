/* eslint-disable perfectionist/sort-objects */
import type { RouteObject } from 'react-router-dom'

export const storeRouter: RouteObject = {
  path: '/store',
  async lazy() {
    const { Store } = await import('@/store/ui/pages/Store')
    return { Component: Store }
  }
}
