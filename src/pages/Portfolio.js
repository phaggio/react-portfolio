import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from '../components/Grid';
import ProjectCard from '../components/ProjectCard';
import projects from '../json/projects.json';

const githubDir = `/react-portfolio`;

const maxHeight = {
  maxHeight: '75vh',
  overflowX: 'auto',
  overflowY: 'auto'
}

const Portfolio = () => {
  const [projectList, setProjectList] = useState([projects]);
  const [selectedProject, setSelectedProject] = useState([projects[0]])

  console.log(selectedProject)
  return (
    <div>

      <Container other="mt-1" style={maxHeight}>
        <Row other="border border-primary rounded p-2">

          <Col
            size="sm-12 md-12 lg-4 xl-3"
            other="border border-warning rounded"
            py="2" my="2">
            <label>Projects:</label>
            <div className="d-flex flex-sm-row flex-md-row flex-lg-column align-items-center"
              style={maxHeight}>


              {projects.map(project =>
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  subtitle={project.subtitle}
                />
              )}


            </div>
          </Col>


          <Col size="sm-12 md-12 lg-8 xl-9"
            other="border border-danger rounded mh-50"
            py="2" my="2">
            <div className="">project detail</div>
          </Col>
        </Row>


      </Container>

      {/* <Container>
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
      </Container> */}

    </div>
  )
}

export default Portfolio;