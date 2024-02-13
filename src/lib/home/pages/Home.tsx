import type { FC } from 'react'
import { block } from 'million/react'
import { useNavigate } from 'react-router-dom'

import { State } from '@/common/components'
import { useTheme } from '@/common/hooks'
import { Call } from '@/home/components'

import brand from '@assets/img/brand.png'
import brandwhite from '@assets/img/brandwhite.png'
import tailwind from '@assets/img/tailwind.png'
import tailwindwhite from '@assets/img/tailwindwhite.png'

import '../styles/home.css'

export const Home: FC = block(() => {
  const {
    control,
    isDark,
    changeBlue,
    changePurple,
    changeRed,
    changeEmerald
  } = useTheme()

  const navigate = useNavigate()

  return (
    <div className='page-container'>
      <div className='home-container'>
        <div className='card-flex'>
          <div className={`card-container ${control}`}>
            <p className='adaptable-amina'>Made with love by</p>
            <img
              src={isDark ? brandwhite : brand}
              className='scale-75 lg:scale-100'
              width={400}
              height={200}
              alt=''
            />
            <h3 className='adaptable-center-text-base mb-4 font-semibold'>
              Happy Hacking! with Typescript?
            </h3>
            <p className='adaptable-center-text-base mb-8 font-roboto'>
              Roboto Font works with
            </p>
            <img
              src={isDark ? tailwindwhite : tailwind}
              className='scale-50 lg:scale-75 tall:scale-75'
              width={400}
              height={200}
              alt=''
            />
          </div>
          <div className={`card-container ${control} mb-10 tall:mb-0`}>
            <State />
            <h3 className='adaptable-center-text-bold'>
              Lets see bitcoin price
            </h3>
            <Call />
          </div>
        </div>
        <div className='centered-button-ctn'>
          <button
            className='standard-button'
            type='button'
            onClick={() => navigate('/store')}
          >
            Go to store
          </button>
        </div>
        <div className='mx-auto -mt-1 flex w-fit flex-row gap-7'>
          <button
            className='blue-button'
            type='button'
            onClick={changeBlue}
          ></button>
          <button
            className='purple-button'
            type='button'
            onClick={changePurple}
          ></button>
          <button
            className='red-button'
            type='button'
            onClick={changeRed}
          ></button>
          <button
            className='emerald-button'
            type='button'
            onClick={changeEmerald}
          ></button>
        </div>
      </div>
    </div>
  )
})
