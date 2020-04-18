import React from 'react';
import { Col, Container, Row } from '../Grid';
import ProjectCard from '../ProjectCard';
import projects from '../../assets/projects.json';

const PortfolioContainer = () => {
  return (
    <Container>

      <Row>
        {projects.map(project => 
          <Col size="sm-12 md-6 lg-4" key={project.name}>
            <ProjectCard name={project.name} imgURL={project.imgURL}/>
          </Col>
        )}
        {/* <Col size="sm-12 md-6 lg-4">
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
      </Col> */}

      </Row>
    </Container>
  )
}
export default PortfolioContainer;