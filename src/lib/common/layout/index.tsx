import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/common/components'

export const Layout: FC = () => (
  <main>
    <Header />
    <Outlet />
  </main>
)
