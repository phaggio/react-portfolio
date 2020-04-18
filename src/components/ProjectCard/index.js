import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  console.log((props.imgURL))
  return (
    <div className="card">
      <img src={props.imgURL} className="card-img-top" alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">Some quick example text to build on the card.</p>
        <div className="row ">
          <a href="www.github.com" className="btn btn-primary">GitHub page</a>
          <a href="www.github.com" className="btn btn-primary">Detail</a>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  imgURL: PropTypes.string
}
export default ProjectCard;
