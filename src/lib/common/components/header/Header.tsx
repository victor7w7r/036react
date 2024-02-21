import { block } from 'million/react'
import { Link } from 'react-router-dom'

import { useTheme } from '@/common/hooks'
import { Toggler } from '../toggler/Toggler'

import './header.css'

export const Header = block(() => {
  const { control } = useTheme()

  return (
    <div className='flex items-center justify-center'>
      <nav className={`navbar ${control}`}>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8'>
          <div className='flex flex-1 shrink-0 items-stretch  justify-start '>
            <img src='/favicon.svg' width={30} height={30} alt='' />
            <Link to='/' className='adaptable-text ml-4 font-medium'>
              React Template
            </Link>
          </div>
          <div className='toggler-container'>
            <Toggler />
          </div>
        </div>
      </nav>
    </div>
  )
})
