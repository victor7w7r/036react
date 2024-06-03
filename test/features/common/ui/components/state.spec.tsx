import { render, screen } from '@testing-library/react'

import { State } from '@/common/ui/components'

const mocks = vi.hoisted(() => ({
  mockAppSelector: vi.fn()
}))

vi.mock('~/modules', () => ({
  useAppSelector: mocks.mockAppSelector
}))

describe('state', () => {
  it('renders "Not yet." when count is empty', () => {
    expect.assertions(1)

    mocks.mockAppSelector.mockReturnValue('')

    render(<State />)

    expect(screen.getByText(/store state: not yet\./i)).toBeInTheDocument()
  })

  it('renders count value when count is not empty', () => {
    expect.assertions(2)

    const testValue = 'some value'
    mocks.mockAppSelector.mockReturnValue(testValue)

    render(<State />)

    expect(screen.getByText(/store state: yes, you write/i)).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(`\\b${testValue}\\b`))
    ).toBeInTheDocument()
  })
})
