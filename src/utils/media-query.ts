import { css } from 'styled-components'
import { Breakpoints, ThemeObject } from '../theme/types'

const generateMediaQuery = ({
  breakpointMin,
  breakpointsMax,
}: {
  breakpointMin?: Breakpoints
  breakpointsMax?: Breakpoints
}) => (theme: ThemeObject, styles: any) => {
  if (breakpointMin && breakpointsMax) {
    return `
    @media (min-width: ${
      theme.media[breakpointMin]
    }px) and (max-width: ${Number(theme.media[breakpointsMax]) - 1}px){
      ${css(styles)}
    }
  `
  }

  if (breakpointMin) {
    return `
    @media (min-width: ${theme.media[breakpointMin]}px) {
      ${css(styles)}
    }
  `
  }

  if (breakpointsMax) {
    return `
    @media (max-width: ${theme.media[breakpointsMax]}px) {
      ${css(styles)}
    }
  `
  }

  return
}

export const media = {
  smUp: generateMediaQuery({ breakpointMin: 'sm' }),
  mdUp: generateMediaQuery({ breakpointMin: 'md' }),
  lgUp: generateMediaQuery({ breakpointMin: 'lg' }),
  xlUp: generateMediaQuery({ breakpointMin: 'xl' }),

  smOnly: generateMediaQuery({ breakpointMin: 'sm', breakpointsMax: 'md' }),
  mdOnly: generateMediaQuery({ breakpointMin: 'md', breakpointsMax: 'lg' }),
  lgOnly: generateMediaQuery({ breakpointMin: 'lg', breakpointsMax: 'xl' }),
}
