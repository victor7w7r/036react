import './toggler.css'

import { block } from 'million/react'

import { useTheme } from '@/common/ui/hooks'

export const Toggler = block(() => {
  const { isDark, toggle, togglePeer } = useTheme()

  return (
    <div className='relative'>
      <label
        className='mb-4 inline-flex cursor-pointer items-center'
        htmlFor='checked-toggle'
      >
        <input
          checked={isDark}
          className='peer sr-only'
          id='checked-toggle'
          onChange={toggle}
          type='checkbox'
          value=''
        />
        <div className={`${togglePeer} toggle-design peer`}></div>
        <span className='toggle-title'>Dark Mode</span>
      </label>
    </div>
  )
})
