import { darkTheme, whiteTheme } from '~/theme/app-theme'

import { ThemeContext } from '../context'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  const toggle = () => {
    context.theme.isDark
      ? context.setTheme({
          ...context.theme,
          control: whiteTheme.control,
          isDark: false,
          togglePeer: '',
          white: whiteTheme.white
        })
      : context.setTheme({
          ...context.theme,
          control: whiteTheme.control,
          dark: darkTheme.dark,
          isDark: true,
          togglePeer: darkTheme.togglePeer
        })

    document.body.classList.toggle('dark')
  }

  const changeSelector = (selector: string) =>
    context.theme.isDark
      ? context.setTheme({
          ...context.theme,
          control: `bg-${selector}-700/30`,
          dark: `dark:bg-${selector}-900`,
          togglePeer: `peer-checked:bg-${selector}-500`
        })
      : context.setTheme({
          ...context.theme,
          control: `bg-${selector}-700/30`,
          togglePeer: `peer-checked:bg-${selector}-300`,
          white: `bg-${selector}-300`
        })

  const changeBlue = () => changeSelector('sky')

  const changePurple = () => changeSelector('purple')

  const changeRed = () => changeSelector('red')

  const changeEmerald = () => changeSelector('emerald')

  return {
    changeBlue,
    changeEmerald,
    changePurple,
    changeRed,
    control: context.theme.control,
    dark: context.theme.dark,
    isDark: context.theme.isDark,
    toggle,
    togglePeer: context.theme.togglePeer,
    white: context.theme.white
  }
}
