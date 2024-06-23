import { render, screen } from '@testing-library/react'

import { Header } from '@/common/ui/components/header/Header'

describe('header', () => {
  vi.mock('@/common/ui/hooks', () => ({
    useTheme: vi.fn().mockReturnValue({ control: 'bg-cyan-700/30' })
  }))

  vi.mock('react-router-dom', () => ({
    Link: (props: { children: JSX.Element }) => <a>{props.children}</a>
  }))

  vi.mock('@/common/ui/components/toggler/toggler', () => ({
    Toggler: () => <div>Toggler Component</div>
  }))

  it('renders the header component correctly', () => {
    expect.assertions(1)

    render(<Header />)

    expect(screen.getByText('React Template')).toBeInTheDocument()
  })

  it('applies the correct class based on the theme', () => {
    expect.assertions(1)

    render(<Header />)

    const navbar = screen.getByRole('navigation')

    expect(navbar).toHaveClass('navbar bg-cyan-700/30')
  })
})
