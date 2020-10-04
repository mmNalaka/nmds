export type ThemeUnit = string | number

enum BreakpointsEnum {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type Responsive = {
  [key in Breakpoints]: ThemeUnit
}
export type Breakpoints = keyof typeof BreakpointsEnum
export interface ThemeObject {
  media: Responsive
  grid: {
    columns: number
    gutter: {
      default: ThemeUnit
      responsive: Responsive
    }
  }
  fontFamily: {
    display: string
    body: string
  }
}
