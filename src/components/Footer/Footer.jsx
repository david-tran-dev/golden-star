import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

function Footer({ className, ...rest }) {
  return (
    <div
      className={`footer ${className}`}
      {...rest}
    >
      <p>
        &copy; Copyright Golden Star - 2022
      </p>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {
  className: '',
};
export default React.memo(Footer);
