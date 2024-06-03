import { fireEvent, render, screen } from '@testing-library/react'

import { Store } from '@/store/ui/pages/Store'

const mocks = vi.hoisted(() => ({
  mockDispatch: vi.fn(),
  mockNavigate: vi.fn(),
  mockSetText: vi.fn()
}))

vi.mock('@/common/ui/components', () => ({
  State: () => <div>State Component</div>
}))

vi.mock('@/common/ui/hooks', () => ({
  useTheme: () => ({ control: 'mock-control' })
}))

vi.mock('react-router-dom', () => ({
  useNavigate: () => mocks.mockNavigate
}))

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useRef: vi.fn().mockReturnValue({ current: '' })
  }
})

vi.mock('~/modules', () => ({
  useAppDispatch: () => mocks.mockDispatch
}))

describe('store', () => {
  it('should render correctly', () => {
    expect.assertions(2)

    render(<Store />)

    expect(
      screen.getByText(/write anything in this form and send!/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/go to home/i)).toBeInTheDocument()
  })

  it('should update text state on input change', () => {
    expect.assertions(1)

    render(<Store />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'test' } })
    fireEvent.change(input, { target: { value: 'test' } })

    expect(input).toHaveValue('test')
  })

  it('should call setData with input text on button click', () => {
    expect.assertions(1)

    render(<Store />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'test' } })

    fireEvent.click(screen.getByTestId('send-button'))
    expect(mocks.mockDispatch).toHaveBeenCalledWith({
      payload: 'test',
      type: 'data/mutate'
    })
  })

  it('should navigate to home on button click', () => {
    expect.assertions(1)

    render(<Store />)

    fireEvent.click(screen.getByTestId('go-home-button'))
    expect(mocks.mockNavigate).toHaveBeenCalledWith('/')
  })
})
