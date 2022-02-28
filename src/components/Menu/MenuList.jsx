import React from 'react';
import './menuList.scss';
import menu from '../../data/menu.json';
import Category from '../Category/Category';

const MenuList = ({className, ...rest}) => {
	const menuList = Object.entries(menu).map((item) => {
		const categorySlice = item.slice(0, 1);
		const contentSlice = item.slice(1);
		const category= {
			category: categorySlice[0],
			content: contentSlice[0]
		}
		return category
	})
	 return (
		 <div
			className={`menu-list ${className}`}
			{...rest}
		 >
			<h2>Menu</h2>
			<ul>
			{menuList.map(({category, content}, item) => (
				<Category 
					key={item + category} 
					content={content} 
					category={category}/>
			))
			}			
			</ul>
			</div>
);
};


export default React.memo(MenuList);
