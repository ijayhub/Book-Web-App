import React from 'react'

const Navbar = () => {
  return (
		<div>
			<div className='logo'>
				<h1 className='lg:text-3xl'>CR๐๐</h1>
				<nav>
					<ul className='flex ml-5'>
						<li>
							<a href='/' className='mr-5 focus:text-black'>
								Home
							</a>
						</li>
						<li>
							<a href='/quotes'  className='focus:text-black'>Quotes๐</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar
