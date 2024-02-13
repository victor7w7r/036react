import type { RouteObject } from 'react-router-dom'

export const homeRouter: RouteObject = {
  index: true,
  path: '/',
  async lazy() {
    const { Home } = await import('@/home/pages/Home')
    return { Component: Home }
  }
}
