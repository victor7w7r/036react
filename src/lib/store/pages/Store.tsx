import { type ChangeEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { block } from 'million/react'

import { useAppDispatch } from '@core/modules'
import { useTheme } from '@/common/hooks'
import { State } from '@/common/components'
import { mutate } from '@/common/slices/data-slice'

import '@/store/styles/store.css'

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
            type='text'
            name='text'
            className='input-design peer'
            placeholder=' '
            onChange={(e: ChangeEvent) =>
              (text.current = (e.target as HTMLInputElement).value)
            }
          />
          <label htmlFor='floating' className='floating-design'>
            here
          </label>
        </div>
        <div className='store-btn'>
          <button
            className='standard-button'
            type='button'
            onClick={() => dispatch(mutate(text.current))}
          >
            Send
          </button>
        </div>
        <State />
      </div>
      <div className='centered-button-ctn'>
        <button
          className='standard-button'
          type='button'
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  )
})
