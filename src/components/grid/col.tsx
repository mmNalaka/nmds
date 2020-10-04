import styled, { css } from 'styled-components'
import { Component } from 'react'
import { Responsive } from '../../theme/types'
import { media } from '../../utils/media-query'

interface ColProps {
  col: number | Responsive
  stretch?: boolean
  as?: string | Component
  className?: string
  style?: object
}

export const Col = styled.div<ColProps>`
  width: 100%;
  max-width: ${({ col, theme }) =>
    typeof col === 'number'
      ? `${(100 * col) / theme.grid.columns}%`
      : `${(100 * (col.sm ? Number(col.sm) : 12)) / theme.grid.columns}%`};

  ${({ theme }) =>
    media.mdOnly(
      theme,
      css`
        background: red;
      `
    )}

  ${({ theme }) =>
    media.lgUp(
      theme,
      css`
        background: green;
      `
    )}
`
