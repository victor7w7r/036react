import { block } from 'million/react'

import { useAppSelector } from '@core/modules'

export const State = block(() => {
  const count = useAppSelector(state => state.dataSlice.value)

  return count.length > 0 ? (
    <p className='adaptable-xl'>
      Store State: Yes, you write
      <b> {count} </b>
    </p>
  ) : (
    <p className='adaptable-xl'>Store State: Not yet.</p>
  )
})
