import { ThemeObject } from './types'
import { defaultTheme } from './default'

export * from './default'
export * from './global-styles'

export const buildTheme = (customTheme: Partial<ThemeObject>): ThemeObject => {
  return {
    ...defaultTheme,
    ...customTheme,
  }
}
