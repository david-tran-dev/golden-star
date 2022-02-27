import React from 'react';
import PropTypes from 'prop-types';
import './drink.scss';

const Drink = ({
	className,
	category,
	drink,
	 ...rest}) => {
		 console.log(drink);
	 return (
		 <li
		 className={`drink ${className}`}
		 {...rest}
		 >
			 <h2 className='drink-category'>{category}</h2>
			 {drink.map(({name, description, counterPrice, onSitePrice, volume}, index) => {
				 return (
				 <div className='drink-description' key={name + index}>
					<p>{name && name.toString().toLowerCase()}
						<span className='drink-volume'>{volume}</span>
						<span className='drink-counter-price'>{counterPrice ? counterPrice + '€' : ''}</span>
						<span className='drink-onsite-price'>{onSitePrice ? onSitePrice + '€' : ''}</span>
					</p>
					<p>{description && description.toString().toLowerCase()}</p>
				 </div>

			 	)
				})

			 }

			</li>
);
};

Drink.propTypes = {
		className: PropTypes.string,
		category: PropTypes.string.isRequired,
		drink: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				description: PropTypes.string,
				volume: PropTypes.string
			})
		)
};
Drink.defaultProps = {
		className: '',
		description: '',
		volume: ''	
};
export default React.memo(Drink);
