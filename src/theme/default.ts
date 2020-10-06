import { ThemeObject } from './types'
import { toRem } from '../utils/theme'

// All values must be px values. Which will be converted to rem during the compilation
export const defaultTheme: ThemeObject = {
  gridSize: 12,
  gridGutter: {
    xs: toRem(14),
    md: toRem(16),
  },

  containerMaxWidth: toRem(1760),
  containerPadding: {
    xs: toRem(16),
    md: toRem(24),
    lg: toRem(30),
    xl: toRem(80),
  },
}
