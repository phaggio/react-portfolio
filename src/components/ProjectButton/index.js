import React from 'react';
import PropTypes from 'prop-types';


const size = {
  width: "10rem"
}

const ProjectButton = props => {
  return (

    <button type="button" className="m-1 btn btn-dark btn-block" onClick={() => props.pressed(props.index)}>
      <div className="d-flex flex-column align-items-center">

        <h6 className="d-flex justify-content-center align-items-center" style={size}>
          {props.name}
        </h6>

        <small className="d-none d-sm-none d-md-none d-lg-block text-left">
          {props.subtitle}
        </small>

      </div>
    </button>

  )
}

ProjectButton.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  imgURL: PropTypes.string
}

export default ProjectButton;