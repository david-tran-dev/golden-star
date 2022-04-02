import React from 'react';
import './drinkList.scss';
import drink from '../../data/drink.json';
import Drink from '../Drink/Drink';

const DrinkList = ({className, ...rest}) => {
	const drinkList = Object.entries(drink).map((drinkCategory) => {
		const categorySlice = drinkCategory.slice(0, 1);
		const drinkSlice = drinkCategory.slice(1);
		const category= {
			category: categorySlice[0],
			drink: drinkSlice[0]
		}
		return category
	})
	 return (
		 <div
			className={`drink-list ${className}`}
			{...rest}
		 >
			<h2>Carte des boissons</h2>
			<ul>
			{drinkList.map(({category, drink}, item) => (
				<Drink 
					key={item + category} 
					drink={drink} 
					category={category}/>
			))
			}			
			</ul>
			</div>
);
};


export default React.memo(DrinkList);
