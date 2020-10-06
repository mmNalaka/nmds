import { Responsive } from '../theme/types'
import { css } from 'styled-components'

export const gridBreakpoints: Responsive = {
  xs: 0,
  sm: 420,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1920,
}

export const generateResponsiveGridWidths = (
  res: Responsive,
  gridSize: number,
) => {
  return css`
    ${res.xs &&
      `
        max-width: ${(100 * Number(res.xs)) / gridSize}%;
    `}

    ${res.sm &&
      `
       @media (min-width: ${gridBreakpoints['sm']}px) {
          max-width: ${(100 * Number(res.sm)) / gridSize}%;
       }
    `}

    ${res.md &&
      `
       @media (min-width: ${gridBreakpoints['md']}px) {
          max-width: ${(100 * Number(res.md)) / gridSize}%;
       }
    `}

    ${res.lg &&
      `
       @media (min-width: ${gridBreakpoints['lg']}px) {
          max-width: ${(100 * Number(res.lg)) / gridSize}%;
       }
    `}

    ${res.xl &&
      `
       @media (min-width: ${gridBreakpoints['xl']}px) {
          max-width: ${(100 * Number(res.xl)) / gridSize}%;
       }
    `}

    ${res.xxl &&
      `
       @media (min-width: ${gridBreakpoints['xxl']}px) {
          max-width: ${(100 * Number(res.xxl)) / gridSize}%;
       }
    `}
  `
}

export const generateResponsiveStyles = (
  cssProperty: string,
  res: Responsive,
  isNegative?: boolean,
) => {
  return css`
    ${res.xs &&
      `
        ${cssProperty}: ${isNegative ? '-' : ''}${res.xs};
    `}

    ${res.sm &&
      `
       @media (min-width: ${gridBreakpoints['sm']}px) {
          ${cssProperty}: ${isNegative ? '-' : ''}${res.sm};
       }
    `}

    ${res.md &&
      `
       @media (min-width: ${gridBreakpoints['md']}px) {
          ${cssProperty}: ${isNegative ? '-' : ''}${res.md};
       }
    `}

    ${res.lg &&
      `
       @media (min-width: ${gridBreakpoints['lg']}px) {
          ${cssProperty}: ${isNegative ? '-' : ''}${res.lg};
       }
    `}

    ${res.xl &&
      `
       @media (min-width: ${gridBreakpoints['xl']}px) {
          ${cssProperty}: ${isNegative ? '-' : ''}${res.xl};
       }
    `}

    ${res.xxl &&
      `
       @media (min-width: ${gridBreakpoints['xxl']}px) {
          ${cssProperty}: ${isNegative ? '-' : ''}${res.xxl};
       }
    `}
  `
}
