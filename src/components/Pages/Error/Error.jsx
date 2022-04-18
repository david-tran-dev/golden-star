import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './error.scss';

function Error({ className, ...rest }) {
  return (
    <div
      className="error className"
      {...rest}
    >
      <h1 className="error__title">404 Page not Found</h1>
      <Link className="error__homepage-link" to="/">Revenir à la page d'accueil </Link>
    </div>
  );
}

Error.propTypes = {
  className: PropTypes.string,
};
Error.defaultProps = {
  className: '',
};
export default React.memo(Error);
