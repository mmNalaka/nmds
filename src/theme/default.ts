import { ThemeObject } from './types'

export const BREAKPOINTS = {
  sm: 420,
  md: 720,
  lg: 1024,
  xl: 1440,
}

// All values must be px values. Which will be converted to rem during the compilation
export const defaultTheme: ThemeObject = {
  media: BREAKPOINTS,
  grid: {
    gutter: {
      default: '1rem',
      responsive: {
        sm: 16,
        md: 16,
        lg: 16,
        xl: 16,
      },
    },
    columns: 12,
  },
  fontFamily: {
    body: 'Helvetic',
    display: 'Helvetic',
  },
}
