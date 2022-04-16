/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import './menuList.scss';
import Category from '../Category/Category';

function MenuList({ className, menuList, ...rest }) {
  console.log(menuList);
  const menu = menuList.categories.data.map((item) => {
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
      className={`menu-list ${className}`}
      {...rest}
    >
      {menuList && (
      <>
        <h2>{menuList.name}</h2>
        <ul>
          {menu.map(({ category, content }, item) => (
            <Category
              key={item + category}
              content={content}
              category={category}
            />
          ))}
        </ul>
      </>

      )}
    </div>
  );
}

MenuList.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  menuList: PropTypes.shape.isRequired,

};

MenuList.defaultProps = {
  className: '',
};

export default React.memo(MenuList);
