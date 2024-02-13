import { useContext } from 'react'

import { ThemeContext } from '../context'
import { darkTheme, whiteTheme } from '../models'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  const toggle = () => {
    context.theme.isDark
      ? context.setTheme({
          ...context.theme,
          isDark: false,
          white: whiteTheme.white,
          control: whiteTheme.control,
          togglePeer: ''
        })
      : context.setTheme({
          ...context.theme,
          isDark: true,
          dark: darkTheme.dark,
          control: whiteTheme.control,
          togglePeer: darkTheme.togglePeer
        })

    document.body.classList.toggle('dark')
  }

  const changeSelector = (selector: string) =>
    context.theme.isDark
      ? context.setTheme({
          ...context.theme,
          dark: `dark:bg-${selector}-900`,
          control: `bg-${selector}-700/30`,
          togglePeer: `peer-checked:bg-${selector}-500`
        })
      : context.setTheme({
          ...context.theme,
          white: `bg-${selector}-300`,
          control: `bg-${selector}-700/30`,
          togglePeer: `peer-checked:bg-${selector}-300`
        })

  const changeBlue = () => changeSelector('sky')

  const changePurple = () => changeSelector('purple')

  const changeRed = () => changeSelector('red')

  const changeEmerald = () => changeSelector('emerald')

  return {
    isDark: context.theme.isDark,
    dark: context.theme.dark,
    white: context.theme.white,
    control: context.theme.control,
    togglePeer: context.theme.togglePeer,
    toggle,
    changeBlue,
    changePurple,
    changeRed,
    changeEmerald
  }
}
