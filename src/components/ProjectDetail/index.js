import React from 'react';
import { Container, Row, Col } from '../Grid';
import PropTypes from 'prop-types';

const githubDir = `/react-portfolio`;
const imgSize = {
  height: "100%",
  width: "100%"
};

const ProjectDetail = props => {

  return (
    <div>
      <Container>
        <Row>
          <Col size="12">
            <div className="display-4 text-center">{props.project.name}</div>
            {/* <small className="">{props.project.subtitle}</small> */}

            <hr />
            <p className="mt-2">{props.project.description}</p>
            {props.project.note ?
              <p className="mt-2">{props.project.note}</p>
              :
              ``
            }

            <hr />
            <small>Screenshot</small>
            <div className="w-100 d-flex justify-content-center">
              {/* <img className="" src="https://via.placeholder.com/450x150" /> */}
              <img style={imgSize} alt={`${props.project.name} screenshot`} src={`${githubDir}${props.project.imgURL}`} />
            </div>

            <hr />
          </Col>
        </Row>

        <Row>
          <Col size="12 sm-6">
            <div className="d-flex flex-column align-items-center">
              {
                props.project.link ?
                  <a className="my-1 btn btn-primary w-75"
                    rel="noopener noreferrer"
                    href={props.project.link} target="_blank">
                    <div className="d-flex justify-content-center align-items-center">
                      <i className="fas fa-window-maximize"></i>
                      <p className="p-0 my-0 ml-2">Application</p>
                    </div>
                  </a>
                  :
                  ``
              }

              <a className="my-1 btn btn-info w-75"
                rel="noopener noreferrer"
                href={props.project.github} target="_blank">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fab fa-github-square"></i>
                  <p className="p-0 my-0 ml-2">GitHub Page</p>
                </div>
              </a>

            </div>

            <hr className="d-block d-sm-none" />
          </Col>



          <Col size="12 sm-6">
            <h5 className="text-center">Technologies</h5>
            <ul className="list-group list-group-flush">
              {props.project.technologies ?
                props.project.technologies.map(tech =>
                  <li className="list-group-item bg-light" key={tech.name}>
                    <i className={`${tech.icon} mr-2`} />
                    {tech.name}
                  </li>
                ) : ``
              }
            </ul>
          </Col>
        </Row>


      </Container>
    </div>

  )
}


ProjectDetail.propTypes = {
  project: PropTypes.object,
  children: PropTypes.node
}


export default ProjectDetail;