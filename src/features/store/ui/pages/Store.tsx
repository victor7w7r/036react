import '@/store/ui/styles/store.css'

import type { ChangeEvent } from 'react'

import { State } from '@/common/ui/components'
import { useTheme } from '@/common/ui/hooks'
import { mutate } from '@/common/ui/slices/data-slice'
import { useAppDispatch } from '~/modules'

export const Store = block(() => {
  const { control } = useTheme()

  const text = useRef('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div className='my-auto flex size-full flex-col items-center justify-center'>
      <div className={`card-container ${control}`}>
        <h3 className='store-title'>Write anything in this form and send!</h3>
        <div className='relative z-0 mx-auto mt-6 w-64'>
          <input
            className='input-design peer'
            name='text'
            onChange={(e: ChangeEvent) =>
              (text.current = (e.target as HTMLInputElement).value)
            }
            placeholder=' '
            type='text'
          />
          <label className='floating-design' htmlFor='floating'>
            here
          </label>
        </div>
        <div className='store-btn'>
          <button
            className='standard-button'
            onClick={() => dispatch(mutate(text.current))}
            type='button'
          >
            Send
          </button>
        </div>
        <State />
      </div>
      <div className='centered-button-ctn'>
        <button
          className='standard-button'
          onClick={() => navigate('/')}
          type='button'
        >
          Go to Home
        </button>
      </div>
    </div>
  )
})
