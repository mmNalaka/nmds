import { CSSProperties } from 'react'
import styled from 'styled-components'

export interface RowProps {
  className?: string
  align?: AlignSetting
  justifyContent?: AlignSetting
  style?: CSSProperties
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
