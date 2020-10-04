import styled from 'styled-components'

export interface RowProps {
  className?: string
  align?: string
  justifyContent?: string
  style?: object
}

export const Row = styled.div<RowProps>`
  display: flex;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'center'};
`
