import { errorBinance } from '@/home/business/models'
import binanceReducer, {
  fetchCoins,
  initialState
} from '@/home/ui/slices/binance-slice'

describe('binanceSlice', () => {
  const mocks = vi.hoisted(() => ({
    useCaseMock: vi.fn()
  }))

  vi.mock('~/di', () => ({ inject: { resolve: mocks.useCaseMock } }))

  it('should handle initial state', () => {
    expect.assertions(1)

    expect(binanceReducer(undefined, { type: 'unknown' })).toStrictEqual(
      initialState
    )
  })

  it('should handle fetchCoins.pending', () => {
    expect.assertions(1)

    const action = { type: fetchCoins.pending.type }
    const state = binanceReducer(initialState, action)

    expect(state).toStrictEqual({
      data: errorBinance(),
      error: undefined,
      loading: true
    })
  })

  it('should handle fetchCoins.fulfilled', () => {
    expect.assertions(1)

    const action = { payload: errorBinance(), type: fetchCoins.fulfilled.type }
    const state = binanceReducer(initialState, action)

    expect(state).toStrictEqual({
      data: errorBinance(),
      error: undefined,
      loading: false
    })
  })

  it('should handle fetchCoins.rejected', () => {
    expect.assertions(1)

    const mockError = { message: 'Fetch failed' }
    const action = { error: mockError, type: fetchCoins.rejected.type }
    const state = binanceReducer(initialState, action)

    expect(state).toStrictEqual({
      data: errorBinance(),
      error: 'Fetch failed',
      loading: false
    })
  })
})
