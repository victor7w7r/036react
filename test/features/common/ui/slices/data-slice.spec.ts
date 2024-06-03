import { configureStore } from '@reduxjs/toolkit'

import { dataSlice, mutate } from '@/common/ui/slices/data-slice'

describe('dataSlice', () => {
  const store = configureStore({
    reducer: {
      data: dataSlice.reducer
    }
  })

  it('should handle initial state', () => {
    expect.assertions(1)

    const { value } = store.getState().data
    expect(value).toBe('')
  })

  it('should handle mutate', () => {
    expect.assertions(1)

    const testValue = 'test value'
    store.dispatch(mutate(testValue))
    const { value } = store.getState().data
    expect(value).toStrictEqual(testValue)
  })
})
