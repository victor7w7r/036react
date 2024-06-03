import { renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store, useAppDispatch, useAppSelector } from '~/modules/store-module'

describe('storeModule', () => {
  it('should configure the store with the correct reducers', () => {
    expect.assertions(2)

    const state = store.getState()
    expect(state).toHaveProperty('binanceSlice')
    expect(state).toHaveProperty('dataSlice')
  })

  it('useAppDispatch hook returns the correct dispatch function', () => {
    expect.assertions(1)

    const { result } = renderHook(useAppDispatch, {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    })
    expect(result.current).toStrictEqual(store.dispatch)
  })

  it('useAppSelector hook returns the correct state', () => {
    expect.assertions(1)

    const { result } = renderHook(() => useAppSelector(state => state), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
    })
    expect(result.current).toStrictEqual(store.getState())
  })
})
