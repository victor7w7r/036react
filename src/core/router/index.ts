/* eslint-disable perfectionist/sort-objects */
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { Layout } = await import('../../features/common/layout')
      return { Component: Layout }
    }
  }
])
