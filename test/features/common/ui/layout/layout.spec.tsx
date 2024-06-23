import { render, screen } from '@testing-library/react'

import { Layout } from '@/common/ui/layout/Layout'

describe('layout', () => {
  vi.mock('react-router-dom', () => ({
    Outlet: () => <div>Router Component</div>
  }))

  vi.mock('@/common/ui/components', () => ({
    Header: () => <div>Header Component</div>
  }))

  it('renders layout correctly', () => {
    expect.assertions(2)

    render(<Layout />)
    expect(screen.getByText('Router Component')).toBeInTheDocument()
    expect(screen.getByText('Header Component')).toBeInTheDocument()
  })
})
