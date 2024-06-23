import { render, screen } from '@testing-library/react'
import { act } from 'react'

import { ThemeContext, ThemeProvider } from '@/common/ui/context/ThemeProvider'
import { whiteTheme } from '~/theme'

describe('sessionProvider', () => {
  const TestComponent = () => {
    const { setTheme, theme } = useContext(ThemeContext)

    return (
      <div>
        <p data-testid='theme'>{JSON.stringify(theme)}</p>
        <button
          data-testid='set-theme'
          onClick={() => setTheme({ ...theme, isDark: !theme.isDark })}
          type='button'
        >
          Toggle Dark Mode
        </button>
      </div>
    )
  }

  beforeEach(() => {
    document.body.classList.remove('dark')
  })

  it('provides the initial context values', () => {
    expect.assertions(1)

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('theme')).toHaveTextContent(
      JSON.stringify(whiteTheme)
    )
  })

  it('updates the theme context value', () => {
    expect.assertions(1)

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const button = screen.getByTestId('set-theme')

    act(() => {
      button.click()
    })

    expect(screen.getByTestId('theme')).toHaveTextContent(
      JSON.stringify({ ...whiteTheme, isDark: true })
    )
  })

  it('initializes with dark mode if the body has dark class', () => {
    expect.assertions(1)

    document.body.classList.add('dark')

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(screen.getByTestId('theme')).toHaveTextContent(
      JSON.stringify({ ...whiteTheme, isDark: true })
    )
  })
})
