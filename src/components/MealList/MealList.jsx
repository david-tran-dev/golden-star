/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './mealList.scss';
import Meal from '../Meal/Meal';

function MealList({ className, mealList, ...rest }) {
  const meal = mealList.categories.data.map((item) => {
    const category = item.attributes.name;
    const content = item.attributes.dishes.data.map((dish) => {
      const dishes = {
        name: dish.attributes.name,
        description: dish.attributes.description,
        onSitePrice: dish.attributes.on_site_price,
      };
      return dishes;
    });
    const data = {
      category,
      content,
    };
    return data;
  });
  return (
    <div
      className={`meal-list ${className}`}
      {...rest}
    >
      <h2>{mealList.name}</h2>
      <p>Venez déguster notre plat signature</p>
      <ul>
        {meal.map(({ category, content }, index) => (
          <Meal
            key={index + category}
            content={content}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
}

MealList.propTypes = {
  className: PropTypes.string,
  mealList: PropTypes.object.isRequired,

};
MealList.defaultProps = {
  className: '',
};
export default React.memo(MealList);
