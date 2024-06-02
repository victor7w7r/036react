import './header.css'

import { Link } from 'react-router-dom'

import { useTheme } from '@/common/ui/hooks'

import { Toggler } from '../toggler/Toggler'

export const Header = block(() => {
  const { control } = useTheme()

  return (
    <div className='flex items-center justify-center'>
      <nav className={`navbar ${control}`}>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8'>
          <div className='flex flex-1 shrink-0 items-stretch justify-start'>
            <img alt='' height={30} src='/favicon.svg' width={30} />
            <Link className='adaptable-text ml-4 font-medium' to='/'>
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
