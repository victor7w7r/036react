type CommonElements = {
  white: string
  dark: string
  control: string
}

export type AppTheme = CommonElements & {
  isDark: boolean
  togglePeer: string
}

const stdElements: CommonElements = {
  white: 'bg-white',
  dark: 'dark:bg-zinc-900',
  control: 'bg-slate-700/30'
}

export const whiteTheme: AppTheme = {
  ...stdElements,
  isDark: false,
  togglePeer: 'peer-checked:bg-white'
}

export const darkTheme: AppTheme = {
  ...stdElements,
  isDark: true,
  togglePeer: 'peer-checked:bg-dark'
}
