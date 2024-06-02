import { Spinner } from '@/home/ui/components'
import { fetchCoins } from '@/home/ui/slices/binance-slice'
import { useAppDispatch, useAppSelector } from '~/modules'

export const Call = block(() => {
  const state = useAppSelector(state => state.binanceSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchCoins())
  }, [dispatch])

  return state.loading ? (
    <Spinner />
  ) : (
    <>
      <p className='adaptable-call'>
        Symbol:
        {state.data.symbol}
      </p>
      <p className='adaptable-call'>
        Price:
        {state.data.askPrice}
      </p>
    </>
  )
})
