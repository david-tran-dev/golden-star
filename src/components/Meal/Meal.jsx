/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './meal.scss';

function Meal({
  className,
  category,
  content,
  ...rest
}) {
  return (
    <li
      className={`meal ${className}`}
      {...rest}
    >
      <h2 className="meal-category">{category}</h2>
      {content.map(({
        name, description, counterPrice, onSitePrice, volume,
      }, index) => (
        <div className="meal-description" key={name + index}>
          <p>
            <span className="meal-name">{name && name.toString().toLowerCase()}</span>
            <span className="meal-volume">{volume}</span>
            <span className="meal-counter-price">{counterPrice ? `${counterPrice}€` : ''}</span>
            <span className="meal-onsite-price">{onSitePrice ? `${onSitePrice}€` : ''}</span>
          </p>
          <p>{description && description.toString().toLowerCase()}</p>
        </div>

      ))}

    </li>
  );
}

Meal.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      volume: PropTypes.string,
    }),
  ),
};
Meal.defaultProps = {
  className: '',
  content: {},

};
export default React.memo(Meal);
