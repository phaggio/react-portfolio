import PropTypes from 'prop-types';
import React from 'react';

export function Container({ fluid, children }) {
  return (
    <div className={`container${fluid ? `-fluid` : ``}`}>{children}</div>
  );
}
Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool
};

export function Row({ fluid, children }) {
  return (
    <div className={`row${fluid ? `-fluid` : ``}`}>{children}</div>
  );
}
Row.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool
};

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(` `)
        .map(s => `col-${s}`)
        .join(` `)}
    >
      {children}
    </div>
  );
}
Col.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string
};
