import '../styles/home.css'

import brand from '~/assets/brand.png'
import brandwhite from '~/assets/brandwhite.png'
import tailwind from '~/assets/tailwind.png'
import tailwindwhite from '~/assets/tailwindwhite.png'
import { block } from 'million/react'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { State } from '@/common/ui/components'
import { useTheme } from '@/common/ui/hooks'
import { Call } from '@/home/ui/components'

export const Home: FC = block(() => {
  const {
    changeBlue,
    changeEmerald,
    changePurple,
    changeRed,
    control,
    isDark
  } = useTheme()

  const navigate = useNavigate()

  return (
    <div className='flex h-min flex-col justify-center backdrop-blur-xl'>
      <div className='card-flex'>
        <div className={`card-container ${control}`}>
          <p className='adaptable-amina'>Made with love by</p>
          <img
            alt=''
            className='scale-75 lg:scale-100'
            height={200}
            src={isDark ? brandwhite : brand}
            width={400}
          />
          <h3 className='adaptable-center-text-base mb-4 font-semibold'>
            Happy Hacking! with Typescript?
          </h3>
          <p className='adaptable-center-text-base mb-8 font-roboto'>
            Roboto Font works with
          </p>
          <img
            alt=''
            className='scale-50 lg:scale-75 tall:scale-75'
            height={200}
            src={isDark ? tailwindwhite : tailwind}
            width={400}
          />
        </div>
        <div className={`card-container ${control}`}>
          <State />
          <h3 className='adaptable-center-text-bold'>Lets see bitcoin price</h3>
          <Call />
        </div>
      </div>
      <div className='centered-button-ctn'>
        <button
          className='standard-button'
          onClick={() => navigate('/store')}
          type='button'
        >
          Go to store
        </button>
      </div>
      <div className='mx-auto -mt-1 flex w-fit flex-row gap-7'>
        <button
          className='blue-button'
          onClick={changeBlue}
          type='button'
        ></button>
        <button
          className='purple-button'
          onClick={changePurple}
          type='button'
        ></button>
        <button
          className='red-button'
          onClick={changeRed}
          type='button'
        ></button>
        <button
          className='emerald-button'
          onClick={changeEmerald}
          type='button'
        ></button>
      </div>
    </div>
  )
})
