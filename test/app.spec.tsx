import { render, screen } from '@testing-library/react'

import { App } from '../src/App'

describe('app', () => {
  vi.mock('./core/modules/store-module', () => ({
    store: {}
  }))

  vi.mock('./core/router', () => ({
    router: {}
  }))

  it('renders ThemeProvider', () => {
    expect.assertions(1)

    render(<App />)
    expect(screen.getByTestId('ThemeProvider')).toBeInTheDocument()
  })
})
