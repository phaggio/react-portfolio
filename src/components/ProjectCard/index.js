import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  console.log(props.imgURL);
  return (
    <div className="card h-100">
      <img src={props.imgURL} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">{props.subtitle}</p>
        <div className="row">
          <a href={props.github} className="btn btn-primary">GitHub page</a>
          <a href={props.link} className="btn btn-primary">Application</a>
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
