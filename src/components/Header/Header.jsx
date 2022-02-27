import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import logo from '../../assets/img/golden-star-logo.png';

const Header = ({className, ...rest}) => {
	 return (
		 	<div
			className={`header ${className}`}
			{...rest}
		 	>
				<img src={logo} alt="golden star bar" className='logo'/>
				<p>
				19 AVENUE BLAISE PASCAL		<br/>			
				77420 CHAMPS-SUR-MARNE			
				</p>
			</div>
);
};

Header.propTypes = {
		className: PropTypes.string,
};
Header.defaultProps = {
		className: '',
};
export default React.memo(Header);
