import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';
import Header from '../../Header/Header';
import MenuList from '../../Menu/MenuList';
import MealList from '../../MealList/MealList';
import DrinkList from '../../DrinkList/DrinkList';
import Footer from '../../Footer/Footer';

function Menu({
  className, menuList, mealList, drinksList, ...rest
}) {
  return (
    <div
      className="menu className"
      {...rest}
    >
      <Header />
      <MenuList menuList={menuList} />
      <MealList mealList={mealList} />
      <DrinkList drinksList={drinksList} />
      <Footer />
    </div>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
  menuList: PropTypes.object.isRequired,
  mealList: PropTypes.object.isRequired,
  drinksList: PropTypes.object.isRequired,
};
Menu.defaultProps = {
  className: '',
};
export default React.memo(Menu);
