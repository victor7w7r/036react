/* eslint-disable perfectionist/sort-objects */
export const homeRouter: RouteObject = {
  index: true,
  path: '/',
  async lazy() {
    const { Home } = await import('@/home/ui/pages/Home')
    return { Component: Home }
  }
}
