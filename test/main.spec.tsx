import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '../src/App'

vi.mock('react-dom/client', () => ({
  createRoot: vi.fn().mockReturnValue({
    render: vi.fn()
  })
}))

describe('main', () => {
  it('renders the application without crashing', async () => {
    expect.assertions(2)

    const container = document.createElement('div')
    container.id = 'root'
    document.body.append(container)

    await import('../src/main.tsx')

    expect(createRoot).toHaveBeenCalledWith(container)
    expect(createRoot(container).render).toHaveBeenCalledWith(
      <StrictMode>
        <App />
      </StrictMode>
    )
  })
})
