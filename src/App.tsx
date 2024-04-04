import '@/common/styles/global.css'

import type { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './core/router'

export const App: FC = () => <RouterProvider router={router} />
