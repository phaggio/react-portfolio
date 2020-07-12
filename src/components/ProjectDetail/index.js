import React from 'react';
import { Container, Row, Col } from '../Grid';
import PropTypes from 'prop-types';

const githubDir = `/react-portfolio`;
const imgSize = {
  height: "100%",
  width: "100%"
}


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
              {/* <img className="" src="https://via.placeholder.com/450x150" /> */}
              <img style={imgSize} src={githubDir + props.project.imgURL} />
            </div>

            <hr />
          </Col>
        </Row>

        <Row>
          <Col size="12 sm-6">
            <div className="d-flex flex-column align-items-center">
              <a className="my-1 btn btn-primary w-75" href={props.project.link} target="_blank">Application</a>
              <a className="my-1 btn btn-info w-75" href={props.project.github} target="_blank">GitHub Page</a>
            </div>

            <hr className="d-block d-sm-none" />
          </Col>



          <Col size="12 sm-6">
            <h5 className="text-center">Technologies</h5>
            <ul className="list-group list-group-flush">
              {props.project.technologies ? props.project.technologies.map(tech =>
                <li className="list-group-item bg-light" key={tech}>{tech}</li>
              ) : ``}
            </ul>
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