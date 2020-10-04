import React from 'react'
import { Row } from '../src/components/grid/row'
import { Col } from '../src/components/grid/col';

export default {
  title: 'Components/Row',
  component: Row,
}

export const Primary = () => (
  <Row>
    <Col col={{sm: 6}}>Column 1</Col>
    <Col col={{sm: 6}}>Column 1</Col>
  </Row>
)
