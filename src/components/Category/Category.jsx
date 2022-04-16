/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './category.scss';

function Category({
  className,
  category,
  content,
  ...rest
}) {
  return (
    <li
      className={`content ${className}`}
      {...rest}
    >
      <h2 className="content-category">{category}</h2>
      {content.map(({
        name, description, counterPrice, onSitePrice, volume,
      }, index) => (
        <div className="content-description" key={name + index}>
          <p>
            {name && name.toString().toLowerCase()}
            <span className="content-volume">{volume}</span>
            <span className="content-counter-price">{counterPrice ? `${counterPrice}€` : ''}</span>
            <span className="content-onsite-price">{onSitePrice ? `${onSitePrice}€` : ''}</span>
          </p>
          <p>{description && description.toString().toLowerCase()}</p>
        </div>

      ))}

    </li>
  );
}

Category.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      volume: PropTypes.string,
    }),
  ),
};
Category.defaultProps = {
  className: '',
  content: {},
};
export default React.memo(Category);
