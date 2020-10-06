import { ThemeObject } from '../theme/types'

export const themeGet = (theme: ThemeObject, themeKey: keyof ThemeObject) =>
  theme[themeKey]

export const toRem = (value: number): string => `${value / 16}rem`
