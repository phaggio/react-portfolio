import React from 'react';

const TechListItem = (props) => {

  const color = ((type) => {
    switch (type) {
      case 'language':
        return {
          backgroundColor: '#53d769',
          color: 'white'
        };
      case 'framework':
        return {
          backgroundColor: '#fd9426',
          color: 'white'
        };
      case 'tool':
        return {
          backgroundColor: '#fecb2e',
          color: 'white'
        };
      default:
        break;
    }

  })(props.type)

  return (
    <li className="list-group-item mt-1 rounded py-1"
      style={color}
      key={props.name}>
      <i className={`${props.icon} mr-2`} />
      {props.name}
    </li>
  )
}

export default TechListItem;