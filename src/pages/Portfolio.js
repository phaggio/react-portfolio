import React, { useState } from 'react';
import { Col, Container, Row } from '../components/Grid';
import ProjectItem from '../components/ProjectItem';
import ProjectDetail from '../components/ProjectDetail';
import projects from '../json/projects.json';

const maxHeight = {
  maxHeight: '75vh',
  overflowX: 'auto',
  overflowY: 'auto'
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const projectButtonPress = index => {
    const targetProj = projects[index]
    setSelectedProject(targetProj)
  }

  return (
    <div>

      <Container other="mt-1">
        <Row>
          <Col size="sm-12 md-12 lg-4 xl-3" py="2" my="2">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <label className="text-dark font-weight-bold">Projects:</label>
            </div>

            <div className="d-flex flex-sm-row flex-md-row flex-lg-column align-items-center" style={maxHeight}>
              {projects.map((project, index) =>
                <ProjectItem
                  key={project.name}
                  index={index}
                  name={project.name}
                  subtitle={project.subtitle}
                  pressed={projectButtonPress}
                />
              )}
            </div>
          </Col>

          <Col size="sm-12 md-12 lg-8 xl-9" py="2" my="2">
            <ProjectDetail project={selectedProject} />
          </Col>
        </Row>
      </Container>

      {/* console log tools */}
      {/* <div>
        <button className="btn btn-warning m-1" onClick={() => console.log(projects)}>print projects</button>
        <button className="btn btn-warning m-1" onClick={() => console.log(selectedProject)}>print selectedProject</button>
      </div> */}
    </div>
  )
}

export default Portfolio;