import React from 'react'
import { Row } from '../src/components/grid/row'
import { Col } from '../src/components/grid/col'
import { Container } from '../src/components/grid/container'

export default {
  title: 'Components/Row',
  component: Row,
}

export const Primary = () => (
  <Container>
    <Row align="end" style={{backgroundColor: "teal"}}>
      <Col col={{ xs: 3, sm: 4 }}>Column 1</Col>
      <Col col={{ xs: 6, sm: 4 }}>Column 2</Col>
      <Col col={{ xs: 6, sm: 4, lg: 12 }}>Column 3</Col>
    </Row>
  </Container>
)
