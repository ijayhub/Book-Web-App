import React, { useState } from 'react';

const Input = ({ searchBooks }) => {
	const [search, setSearch] = useState('');
	
	// create a function to handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		searchBooks(search);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='type here...'
					autoComplete='off'
					className='input'
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type='submit' className='btn '>
					search
				</button>
			</form>
		</div>
	);
};

export default Input;
