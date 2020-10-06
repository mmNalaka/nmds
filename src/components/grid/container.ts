import styled, { css } from 'styled-components'
import { generateResponsiveStyles } from '../../responsive'
import { themeGet } from '../../utils/theme'

interface ContainerProps {
  fluid?: boolean
  className?: string
  style?: object
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  margin: 0 auto;

  ${p => css`
    max-width: ${p.fluid ? '100%' : themeGet(p.theme, 'containerMaxWidth')};

    ${generateResponsiveStyles('padding-left', p.theme.containerPadding)}
    ${generateResponsiveStyles('padding-right', p.theme.containerPadding)}
  `}
`
