import {
  type FC,
  type ReactNode,
  createContext,
  useEffect,
  useState
} from 'react'

import { type AppTheme, whiteTheme } from '../models'

export const ThemeContext = createContext<{
  theme: AppTheme
  setTheme: (theme: AppTheme) => void
}>({
  theme: whiteTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  setTheme: () => {}
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
        theme,
        setTheme
      }}
    >
      <div
        className={`min-h-screen transition-colors
      duration-1000 ${theme.white} ${theme.dark}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
