import { Outlet } from 'react-router-dom'

import { Header } from '@/common/components'

export const Layout = () => (
  <main className='flex h-screen flex-col gap-8'>
    <Header />
    <Outlet />
  </main>
)
