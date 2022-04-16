/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import './loading.scss';

function Loading({ className }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThreeDots type="ThreeDots" color="#d88c13" height="100" width="100" />
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};
Loading.defaultProps = {
  className: '',
};
export default React.memo(Loading);
