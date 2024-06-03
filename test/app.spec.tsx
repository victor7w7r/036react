import { render, screen } from '@testing-library/react'

import { App } from '../src/App'

vi.mock('./core/modules/store-module', () => ({
  store: {}
}))

vi.mock('./core/router', () => ({
  router: {}
}))

describe('app', () => {
  it('renders ThemeProvider', () => {
    expect.assertions(1)

    render(<App />)
    expect(screen.getByTestId('ThemeProvider')).toBeInTheDocument()
  })
})
