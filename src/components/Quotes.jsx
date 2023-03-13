import React, { useState } from 'react'
import Navbar from './Navbar'
import { BiRefresh } from 'react-icons/bi';
import{data} from '../../data'

const Quotes = () => {
	const [selectedQuotes, setSelectedQuotes] = useState(data);

	function handleClick() {
		const randomIndex = Math.floor(Math.random() * data.length);
		setSelectedQuotes(data[randomIndex]);
	}
	
	return (
		<div>
			<Navbar />
			<div className='bg-navbar'>
				<div className='overlay-2'>
					<section className='leading-loose max-w-7xl mx-auto'>
						<div className='text-center'>
							<h2 className='lg:text-7xl py-12 lg:py-20'> QUOTES </h2>
						</div>
						{selectedQuotes && (
							<div>
								<h2 className='text-center lg:text-2xl mt-3 font-mono'>
									{selectedQuotes.title}
								</h2>
							</div>
						)}

						<div className='flex justify-center items-center '>
							<button type='button' className='btn-quote' onClick={handleClick}>
								Click to generate a quote{' '}
								<span className='ml-2'>
									<BiRefresh />
								</span>
							</button>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Quotes
