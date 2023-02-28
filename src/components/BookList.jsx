import React from 'react'
import { Link } from 'react-router-dom';


const BookList = ({ books }) => {
	
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 lg:mt-20 rounded mx-5 lg:mx-0'>
			{books.map((book) => (
				<div
					key={book.id}
					className='bg-white rounded-2xl shadow-2xl p-3 h-auto'>
					<div>
						<img
							src={book.volumeInfo.imageLinks.smallThumbnail}
							alt={book.volumeInfo.title}
							style={{ width: '100%', height: '250px' }}
						/>
					</div>
					<div>
						<h5 className='pt-3 text-lg font-bold tracking-tight text-gray-900 text-center'>
							Title: {book.volumeInfo.title}
						</h5>
						<p className='font-bold text-center pt-5'>By: {book.volumeInfo.authors}</p>
					</div>
					<Link to={`/books/${book.id}`}>
						<div className='pt-8 flex justify-center items-center'>
							<button className='btn-readmore'>
								Click to get the book details
								<svg
									aria-hidden='true'
									className='w-4 h-4 ml-2 -mr-1'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</button>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default BookList
