import React from 'react';
import PropTypes from 'prop-types';
import './mealList.scss';
import meal from '../../data/meal.json';
import Meal from '../Meal/Meal';

function MealList({ className, mealList, ...rest }) {
  const meal = mealList.categories.data.map((item) => {
    const categorySlice = item.slice(0, 1);
    const contentSlice = item.slice(1);
    const data = {
      category,
      content,
    };
    return category;
  });
	 return (
  <div
    className={`meal-list ${className}`}
    {...rest}
		>
    <h2>PLAT SIGNATURE DU <br />
      « GOLDEN STAR »
    </h2>
    <p>Venez déguster notre plat signature</p>
    <ul>
      {mealList.map(({ category, content }, index) => (
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
};
MealList.defaultProps = {
  className: '',
};
export default React.memo(MealList);
