import React from 'react';
import PropTypes from 'prop-types';
import './drink.scss';

const Drink = ({
	className,
	category,
	drink,
	 ...rest}) => {
	 return (
		 <li
		 className={`drink ${className}`}
		 {...rest}
		 >
			 <h2 className='drink-category'>{category}</h2>
			 {drink.map((item, index) => {
				 return (
				 <div className='drink-description' key={item.name + index}>
					<p>{item.name && item.name.toString().toLowerCase()}
						<span className='drink-volume'>{item.volume}</span>
						<span className='drink-counter-price'>{item.counterPrice}€</span>
						<span className='drink-onsite-price'>{item.onSitePrice}€</span>
					</p>
					<p>{item.description}</p>
				 </div>

			 	)
				})

			 }

			</li>
);
};

Drink.propTypes = {
		className: PropTypes.string,
};
Drink.defaultProps = {
		className: '',
};
export default React.memo(Drink);
