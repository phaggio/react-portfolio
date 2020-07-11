import React from 'react';
import { Col, Container, Row } from '../components/Grid';
import ProjectCard from '../components/ProjectCard';
import projects from '../json/projects.json';

const githubDir = `/react-portfolio`;

const overflow = {
  overflowX: 'auto',
  overflowY: 'auto'
};

const maxHeight = {
  maxHeight: '75vh',
  overflowX: 'auto',
  overflowY: 'auto'
}

const Portfolio = () => {
  return (
    <div className="background">
      <Container other="" style={maxHeight}>
        <Row other="border border-primary rounded p-2">
          <Col
            size="sm-12 md-12 lg-4 xl-3" 
            other="border border-warning rounded"
            py="2" my="2"
            style={maxHeight}
          >
            <div className="d-flex flex-sm-row flex-md-row flex-lg-column" 
              style={maxHeight}>
              <div className="border border-secondary rounded p-3 m-1">Project 1</div>
              <div className="border border-secondary rounded p-3 m-1">Project 2</div>
              <div className="border border-secondary rounded p-3 m-1">Project 3</div>
              <div className="border border-secondary rounded p-3 m-1">Project 4</div>
              <div className="border border-secondary rounded p-3 m-1">Project 5</div>
              <div className="border border-secondary rounded p-3 m-1">Project 6</div>
              <div className="border border-secondary rounded p-3 m-1">Project 7</div>
              <div className="border border-secondary rounded p-3 m-1">Project 8</div>
              <div className="border border-secondary rounded p-3 m-1">Project 9</div>
              <div className="border border-secondary rounded p-3 m-1">Project 10</div>
              <div className="border border-secondary rounded p-3 m-1">Project 11</div>
              <div className="border border-secondary rounded p-3 m-1">Project 12</div>
              <div className="border border-secondary rounded p-3 m-1">Project 13</div>
              <div className="border border-secondary rounded p-3 m-1">Project 14</div>
            </div>
          </Col>
          <Col size="sm-12 md-12 lg-8 xl-9"
            other="border border-danger rounded mh-50"
            py="2" my="2"
          >
            <div className="">project detail</div>
          </Col>
        </Row>
      </Container>


      <Container>
        <Row>
          {projects.map(project =>
            <Col size="sm-12 md-6 lg-4" key={project.name}>
              <ProjectCard
                name={project.name}
                subtitle={project.subtitle}
                description={project.description}
                imgURL={githubDir + project.imgURL}
                github={project.github}
                link={project.link}
              />
            </Col>
          )}

        </Row>
      </Container>
    </div>
  )
}

export default Portfolio;