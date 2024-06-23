import { router } from '~/router'

describe('router', () => {
  vi.mock('@/common/ui/layout/Layout', () => ({
    Layout: () => <div>layoutable</div>
  }))

  vi.mock('@/home/ui/router', () => ({
    homeRouter: { path: 'home' }
  }))

  vi.mock('@/store/ui/router', () => ({
    storeRouter: { path: 'store' }
  }))

  it('should have the correct root path', () => {
    expect.assertions(1)

    const rootRoute = router.routes.find(route => route.path === '/')

    expect(rootRoute).toBeDefined()
  })

  it('should include homeRouter', () => {
    expect.assertions(1)

    const rootRoute = router.routes.find(route => route.path === '/')
    const homeRoute = rootRoute?.children?.find(route => route.path === 'home')

    expect(homeRoute).toBeDefined()
  })

  it('should include storeRouter', () => {
    expect.assertions(1)

    const rootRoute = router.routes.find(route => route.path === '/')
    const storeRoute = rootRoute?.children?.find(
      route => route.path === 'store'
    )

    expect(storeRoute).toBeDefined()
  })
})
