import type { FC } from 'react';

import { useTheme } from '@/common/hooks';

import './toggler.css';

export const Toggler: FC = () => {
  const { isDark, toggle, togglePeer } = useTheme();

  return (
    <div className='relative'>
      <div className='flex w-full items-center justify-center'>
        <label
          htmlFor='checked-toggle'
          className='mb-4 inline-flex cursor-pointer items-center'
        >
          <input
            type='checkbox'
            value=''
            id='checked-toggle'
            className='peer sr-only'
            checked={isDark}
            onChange={toggle}
          />
          <div className={`${togglePeer} toggle-design peer`}></div>
          <span className='toggle-title'>Dark Mode</span>
        </label>
      </div>
    </div>
  );
};
