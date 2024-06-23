import { Home } from '@/home/ui/pages/Home'
import { homeRouter } from '@/home/ui/router'

describe('homeRouter', () => {
  vi.mock('@/home/ui/pages/Home', () => ({
    Home: () => <div>Home Component</div>
  }))

  it('should define the correct path', () => {
    expect.assertions(1)

    expect(homeRouter.path).toBe('/')
  })

  it('should have a component', () => {
    expect.assertions(1)

    expect(homeRouter).toBeDefined()
  })

  it('should lazy load Home component', async () => {
    expect.assertions(1)

    //@ts-ignore
    const lazyResult = await homeRouter.lazy()

    expect(lazyResult).toStrictEqual({ Component: Home })
  })
})
