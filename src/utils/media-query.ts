// import { css } from 'styled-components'
// import { Breakpoints, Responsive } from '../theme/types'

// const gridBreakpoints: Responsive = {
//   xs: 0,
//   sm: 420,
//   md: 768,
//   lg: 1024,
//   xl: 1440,
// }

// const generateMedia = {
//   up: (breakpoint: Breakpoints) => (
//     content: any,
//   ) => `@media only screen and (min-width: ${gridBreakpoints[breakpoint]}px) {
//     ${css(content)}
//   }`,

//   only: (breakpointMin: Breakpoints, breakpointsMax: Breakpoints) => (
//     content: any,
//   ) => `
//   @media (min-width: ${
//     gridBreakpoints[breakpointMin]
//   }px) and (max-width: ${Number(gridBreakpoints[breakpointsMax]) - 1}px){
//     ${css(content)}
//   }
// `,
// }

// export const media = {
//   xsUp: generateMedia.up('xs'),
//   smUp: generateMedia.up('sm'),
//   mdUp: generateMedia.up('md'),
//   lgUp: generateMedia.up('lg'),
//   xlUp: generateMedia.up('xl'),

//   xsOnly: generateMedia.only('xs', 'md'),
//   smOnly: generateMedia.only('sm', 'md'),
//   mdOnly: generateMedia.only('md', 'lg'),
//   lgOnly: generateMedia.only('lg', 'xl'),
// }
