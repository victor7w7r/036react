import { Store } from '@/store/ui/pages/Store'
import { storeRouter } from '@/store/ui/router'

vi.mock('@/store/ui/pages/Store', () => ({
  Store: () => <div>Store Component</div>
}))

describe('storeRouter', () => {
  it('should define the correct path', () => {
    expect.assertions(1)

    expect(storeRouter.path).toBe('/store')
  })

  it('should have a component', () => {
    expect.assertions(1)

    expect(storeRouter).toBeDefined()
  })

  it('should lazy load Store component', async () => {
    expect.assertions(1)

    //@ts-ignore
    const lazyResult = await storeRouter.lazy()

    expect(lazyResult).toStrictEqual({ Component: Store })
  })
})
