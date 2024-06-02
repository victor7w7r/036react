/* eslint-disable perfectionist/sort-objects */
export const storeRouter: RouteObject = {
  path: '/store',
  async lazy() {
    const { Store } = await import('@/store/ui/pages/Store')
    return { Component: Store }
  }
}
