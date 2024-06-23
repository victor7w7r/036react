import { useTheme } from '@/common/ui/hooks'

describe('useTheme', () => {
  const mocks = vi.hoisted(() => ({
    mockSetTheme: vi.fn(),
    mockTheme: { isDark: false },
    mockUseContext: vi.fn()
  }))

  vi.mock('react', async () => ({
    ...(await vi.importActual('react')),
    useContext: () => ({
      setTheme: mocks.mockSetTheme,
      theme: mocks.mockTheme
    })
  }))

  it('should toggle theme correctly', () => {
    expect.assertions(2)

    const { toggle } = useTheme()

    mocks.mockTheme.isDark = true

    toggle()

    expect(mocks.mockSetTheme).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    mocks.mockTheme.isDark = false

    toggle()

    expect(mocks.mockSetTheme).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: true,
      togglePeer: 'peer-checked:bg-dark'
    })
  })

  it('should change theme color correctly', () => {
    expect.assertions(4)

    mocks.mockTheme.isDark = false

    const { changeBlue, changeEmerald, changePurple, changeRed } = useTheme()

    changeBlue()

    expect(mocks.mockSetTheme).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })

    mocks.mockTheme.isDark = true

    changePurple()

    expect(mocks.mockSetTheme).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: true,
      togglePeer: 'peer-checked:bg-dark'
    })

    changeRed()

    expect(mocks.mockSetTheme).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      dark: 'dark:bg-zinc-900',
      isDark: true,
      togglePeer: 'peer-checked:bg-dark'
    })

    changeEmerald()

    expect(mocks.mockSetTheme).toHaveBeenCalledWith({
      control: 'bg-slate-700/30',
      isDark: false,
      togglePeer: '',
      white: 'bg-white'
    })
  })
})
