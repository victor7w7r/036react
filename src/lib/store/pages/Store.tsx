import type { FC } from 'react'
import { block } from 'million/react'

import { useTheme } from '@/common/hooks'
import { State } from '@/common/components'
import { useStorePage } from '@/store/hooks'

import '@/store/styles/store.css'

export const Store: FC = block(() => {
  const { control } = useTheme()

  const { handleChange, handleSubmit, changeToHome } = useStorePage()

  return (
    <div className='page-container'>
      <div className='store-container'>
        <div className={`card-container ${control}`}>
          <h3 className='store-title'>Write anything in this form and send!</h3>
          <div className='relative z-0 mx-auto mt-6 w-64'>
            <input
              type='text'
              name='text'
              className='input-design peer'
              placeholder=' '
              onChange={handleChange}
            />
            <label htmlFor='floating' className='floating-design'>
              here
            </label>
          </div>
          <div className='store-btn'>
            <button
              className='standard-button'
              type='button'
              onClick={handleSubmit}
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
            onClick={changeToHome}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
})
