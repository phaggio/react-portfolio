import React from 'react';
import { Col, Container, Row } from '../Grid';
import ProjectCard from '../ProjectCard';

const PortfolioContainer = () =>
  <Container>

    <Row>

      <Col size="sm-12 md-6 lg-4">
        <ProjectCard />
      </Col>
      <Col size="sm-12 md-6 lg-4">
        <ProjectCard />
      </Col>
      <Col size="sm-12 md-6 lg-4">
        <ProjectCard />
      </Col>
      <Col size="sm-12 md-6 lg-4">
        <ProjectCard />
      </Col>
      <Col size="sm-12 md-6 lg-4">
        <ProjectCard />
      </Col>

    </Row>
  </Container>
export default PortfolioContainer;