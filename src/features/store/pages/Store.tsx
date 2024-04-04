import '@/store/styles/store.css'

import { block } from 'million/react'
import { type ChangeEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { State } from '@/common/components'
import { useTheme } from '@/common/hooks'
import { mutate } from '@/common/slices/data-slice'
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
