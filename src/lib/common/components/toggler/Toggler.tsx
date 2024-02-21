import { block } from 'million/react'

import { useTheme } from '@/common/hooks'

import './toggler.css'

export const Toggler = block(() => {
  const { isDark, toggle, togglePeer } = useTheme()

  return (
    <div className='relative'>
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
  )
})
