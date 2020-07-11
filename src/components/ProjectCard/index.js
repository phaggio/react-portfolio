import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ProjectCard = props => {
  return (
    <div className="card h-100">
      <img src={props.imgURL} className="card-img-top" alt={props.name} />
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">{props.subtitle}</p>
        <div className="text-center mt-auto">
          <a href={props.github} className="btn btn-primary mx-1 my-1"
            rel="noopener noreferrer" target="_blank">GitHub page</a>
          <a href={props.link} className="btn btn-primary mx-1 my-1"
            rel="noopener noreferrer" target="_blank">Application</a>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  imgURL: PropTypes.string
}

export default ProjectCard;
