import React from 'react';
import { Container, Row, Col } from '../Grid';
import PropTypes from 'prop-types';




const ProjectDetail = props => {


  return (
    <div>
      <Container>
        <Row>
          <Col size="12">
            <div className="display-4 text-center">{props.project.name}</div>
            <small className="">{props.project.subtitle}</small>
            <p className="mt-2">{props.project.description}</p>
            <div className="w-100 d-flex justify-content-center">
              <img className="" src="https://via.placeholder.com/450x150" />
            </div>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col size="6">
            <div className="d-flex flex-column">
              <a className="my-1 btn btn-primary" href={props.project.link} target="_blank">Application</a>
              <a className="my-1 btn btn-info" href={props.project.github} target="_blank">GitHub Page</a>
            </div>
          </Col>

          <Col size="6">
            <h4 className="text-center">Technologies</h4>
            {props.project.technologies.map(tech =>
              <li>{tech}</li>
            )}
          </Col>
        </Row>
      </Container>
    </div>

  )
}


ProjectDetail.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  imgURL: PropTypes.string,
  children: PropTypes.node
}


export default ProjectDetail;