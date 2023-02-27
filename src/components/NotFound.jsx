import React from 'react';
import notfound from '../img/undraw_page_not_found_re_e9o6.svg';
import { Link } from 'react-router-dom';

const Notfound = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<img src={notfound} alt='not found' className='notfound' />
			<p className='lg:text-3xl text-white'>
				Go back to <Link to='/'>Homepage</Link>
			</p>
		</div>
	);
};

export default Notfound;
