/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './drinkList.scss';
import Drink from '../Drink/Drink';

function DrinkList({ className, drinksList, ...rest }) {
  const drink = drinksList.categories.data.map((item) => {
    const category = item.attributes.name;
    const content = item.attributes.drinks.data.map((drink) => {
      const drinks = {
        name: drink.attributes.name,
        description: drink.attributes.description,
        volume: drink.attributes.volume,
        counterPrice: drink.attributes.counter_price,
        onSitePrice: drink.attributes.on_site_price,
      };
      return drinks;
    });
    const data = {
      category,
      content,
    };
    return data;
  });
  return (
    <div
      className={`drink-list ${className}`}
      {...rest}
    >
      <h2>Carte des boissons</h2>
      <ul>
        {drink.map(({ category, content }, item) => (
          <Drink
            key={item + category}
            content={content}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
}

DrinkList.propTypes = {
  className: PropTypes.string,
  drinksList: PropTypes.object.isRequired,
};

DrinkList.defaultProps = {
  className: '',
};

export default React.memo(DrinkList);
