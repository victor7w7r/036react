import type { FC } from 'react';
import { block } from 'million/react';

import { useTheme } from '@/common/hooks';
import { Link } from 'react-router-dom';

import { Toggler } from '../toggler/Toggler';

import './Header.css';

export const Header: FC = block(() => {
  const { control } = useTheme();

  return (
    <div className='flex items-center justify-center'>
      <nav className={`navbar ${control}`}>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-1 items-stretch justify-start'>
              <div className='flex shrink-0 items-center'>
                <img src='/favicon.svg' width={30} height={30} alt='' />
                <Link to='/' className='adaptable-text ml-4 font-medium'>
                  React Template
                </Link>
              </div>
            </div>
            <div className='toggler-container'>
              <Toggler />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
});
