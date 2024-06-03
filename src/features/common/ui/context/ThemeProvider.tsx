import type { FC } from 'react'

import { type AppTheme, whiteTheme } from '../../../../core/theme/app-theme'

export const ThemeContext = createContext<{
  setTheme: (theme: AppTheme) => void
  theme: AppTheme
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  setTheme: () => {},
  theme: whiteTheme
})

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(whiteTheme)

  useEffect(
    () =>
      setTheme(thm => ({
        ...thm,
        isDark: document.body.classList.contains('dark')
      })),
    []
  )

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        theme
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-1000 ${theme.white} ${theme.dark}`}
        data-testid='ThemeProvider'
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
