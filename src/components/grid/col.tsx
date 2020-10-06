import styled, { css } from 'styled-components'
import { Component } from 'react'
import { Responsive } from '../../theme/types'
import { generateResponsiveGridWidths } from '../../responsive'

interface ColProps {
  col: Responsive
  stretch?: boolean
  as?: string | Component
  className?: string
  style?: object
}

export const Col = styled.div<ColProps>`
  width: 100%;

  ${p => css`
    max-width: ${generateResponsiveGridWidths(p.col, p.theme.gridSize)};
  `}
`
