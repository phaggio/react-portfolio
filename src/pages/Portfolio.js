import React from 'react';
import { Col, Container, Row } from '../components/Grid';
import ProjectCard from '../components/ProjectCard';
import projects from '../json/projects.json';

const Portfolio = () => {
  //  return <PortfolioContainer />

  return (

    <Container>
      <Row>
        {projects.map(project =>
          <Col size="sm-12 md-6 lg-4" key={project.name}>
            <ProjectCard
              name={project.name}
              subtitle={project.subtitle}
              description={project.description}
              imgURL={project.imgURL}
              github={project.github}
              link={project.link}
            />
          </Col>
        )}

      </Row>
    </Container>
  )
}

export default Portfolio;