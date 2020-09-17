import React from 'react';
import PropTypes from 'prop-types';

const size = {
  minWidth: '120px'
}

const ProjectItem = props => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-1 mx-lg-0 my-lg-1 btn btn-dark btn-sm"
      style={size}
      onClick={() => props.pressed(props.index)}>

      <label className="m-0 p-1 text-wrap">
        {props.name}
      </label>
      <small className="d-none d-lg-block text-left">
        {props.subtitle}
      </small>

    </div>

  )
}

ProjectItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  pressed: PropTypes.func
}

export default ProjectItem;
