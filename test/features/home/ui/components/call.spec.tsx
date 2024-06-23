import { render, screen } from '@testing-library/react'

import { errorBinance } from '@/home/business/models'
import { Call } from '@/home/ui/components/call/Call'

describe('call', () => {
  const mocks = vi.hoisted(() => ({
    mockAppState: vi.fn()
  }))

  vi.mock('@/home/ui/components', () => ({
    Spinner: () => <div data-testid='spinner'>Loading...</div>
  }))

  vi.mock('@/home/ui/slices/binance-slice', () => ({
    fetchCoins: vi.fn()
  }))

  vi.mock('~/modules', () => ({
    useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
    useAppSelector: mocks.mockAppState
  }))

  it('renders spinner when loading', () => {
    expect.assertions(1)

    mocks.mockAppState.mockReturnValue({
      loading: true
    })

    render(<Call />)

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('renders data when not loading', () => {
    expect.assertions(3)

    mocks.mockAppState.mockReturnValue({
      data: errorBinance(),
      loading: false
    })

    render(<Call />)

    expect(screen.getByText(/symbol:/i)).toBeInTheDocument()
    expect(screen.getByText(/err/i)).toBeInTheDocument()
    expect(screen.getByText(/price:/i)).toBeInTheDocument()
  })
})
