export type ThemeUnit = number | string

enum BreakpointsEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export type BreakpointKeys = keyof typeof BreakpointsEnum
export type Responsive = {
  [key in BreakpointsEnum]?: ThemeUnit
}
export interface ThemeObject {
  gridSize: number
  gridGutter: Responsive

  containerMaxWidth: ThemeUnit
  containerPadding: Responsive
}
