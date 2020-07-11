import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ fluid, other, children }) => {
  return (
    <div
      className={
        `container${fluid ? `-fluid` : ``} 
        ${other ? other : ``}`
      }
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  fluid: PropTypes.bool,
  other: PropTypes.string,
  children: PropTypes.node
};


const Row = ({ fluid, rowCols, other, children }) => {
  return (
    <div className={
      `row${fluid ? `-fluid` : ``}
      ${rowCols ?
        rowCols
          .split(` `)
          .map(size => `row-cols-${size}`)
          .join(` `)
        :
        ``}
      ${other ? other : ``}
      `
    }
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  fluid: PropTypes.bool,
  rowCols: PropTypes.string,
  other: PropTypes.string,
  children: PropTypes.node
};

const Col = ({ size, px, mx, py, my, other, children }) => {
  return (
    <div
      className={
        `${size
          .split(` `)
          .map(size => `col-${size}`)
          .join(` `)}
        ${px
          .split(` `)
          .map(px => `px-${px}`)
          .join(` `)}
        ${mx
          .split(` `)
          .map(mx => `mx-${mx}`)
          .join(` `)}
        ${py
          .split(` `)
          .map(py => `py-${py}`)
          .join(` `)}
        ${my
          .split(` `)
          .map(my => `my-${my}`)
          .join(` `)}
        ${other ? other : ``}`
      }
    >
      {children}
    </div>
  );
}

Col.propTypes = {
  size: PropTypes.string,
  px: PropTypes.string,
  mx: PropTypes.string,
  py: PropTypes.string,
  my: PropTypes.string,
  other: PropTypes.string,
  children: PropTypes.node
};

export {
  Container,
  Row,
  Col
}