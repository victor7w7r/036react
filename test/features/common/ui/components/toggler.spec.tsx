import { fireEvent, render, screen } from '@testing-library/react'

import { Toggler } from '@/common/ui/components/toggler/Toggler'

const mocks = vi.hoisted(() => ({
  mockIsDark: false,
  mockToggle: vi.fn(),
  mockTogglePeer: vi.fn().mockReturnValue('peer-checked:bg-dark')
}))

vi.mock('@/common/ui/hooks', () => ({
  useTheme: () => ({
    isDark: mocks.mockIsDark,
    toggle: mocks.mockToggle,
    togglePeer: mocks.mockTogglePeer
  })
}))

describe('toggler', () => {
  it('should display the toggle in dark mode', () => {
    expect.assertions(2)

    render(<Toggler />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    expect(screen.getByText('Dark Mode')).toBeInTheDocument()
  })

  it('should call toggle function on change', () => {
    expect.assertions(1)

    render(<Toggler />)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(mocks.mockToggle).toHaveBeenCalledTimes(1)
  })
})
