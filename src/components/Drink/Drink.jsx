import React from 'react';
import PropTypes from 'prop-types';
import './drink.scss';

function Drink({
  className,
  category,
  drink,
  ...rest
}) {
  return (
    <li
      className={`drink ${className}`}
      {...rest}
    >
      <div className="drink-info">
        <span className="drink-category">{category}</span>
        <span className="drink-info-volume">volume</span>
        <span className="drink-price-at-the-counter">comptoir</span>
        <span className="drink-price-on-site">salle</span>
      </div>
      {drink.map(({
        name, description, counterPrice, onSitePrice, volume,
      }, index) => (
        <div className="drink-description" key={name + index}>
          {(description === null && counterPrice === null
          && onSitePrice === null && volume === null)
            ? <p id="drink-resume">{name && name.toString().toLowerCase()}</p>
            : (
              <>
                <p>
                  <span className="drink-name">{name && name.toString().toLowerCase()}</span>
                  <span className="drink-volume">{volume}</span>
                  <span className="drink-counter-price">{counterPrice ? `${counterPrice}€` : ''}</span>
                  <span className="drink-onsite-price">{onSitePrice ? `${onSitePrice}€` : ''}</span>
                </p>
                <p>{description && description.toString().toLowerCase()}</p>
              </>
            )}
        </div>

      ))}

    </li>
  );
}

Drink.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
  drink: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      volume: PropTypes.string,
    }),
  ),
};
Drink.defaultProps = {
  className: '',
  description: '',
  volume: '',
  name: '',
};
export default React.memo(Drink);
