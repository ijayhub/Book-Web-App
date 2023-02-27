import React, { useState } from 'react'
import Navbar from './Navbar'
import { BiRefresh } from 'react-icons/bi';

const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // create an array
  const projects = [
		{
			title:
				"The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
			id: 1,
		},
		{
			title:
				"A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one. - George R.R. Martin",
			id: 2,
		},
		{
			title:
				"The reading of all good books is like a conversation with the finest minds of past centuries.- Rene Descartes",
			id: 3,
		},
		{
			title:
				"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers. - Charles William Eliot",
			id: 4,
		},
		{
			title:
				"Reading is to the mind what exercise is to the body. - Joseph Addison",
			id: 5,
		},
		{
			title:
        "Reading is escape, and the opposite of escape; it's a way to make contact with reality after a day of making things up, and it's a way of making contact with someone else's imagination after a day that's all too real. - Nora Ephron",
      id:6,
		},
		{
			title:
				"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid. - Jane Austen",
			id: 7,
		},
		{
			title:
				"One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.- Carl Sagan",
			id: 8,
		},
		{
			title:
				"Reading gives us someplace to go when we have to stay where we are. - Mason Cooley",
			id: 9,
		},
		{
			title:
				"I have always imagined that Paradise will be a kind of library.- Jorge Luis Borges",
			id: 10,
		},
  ]



	function handleClick() {
		const randomIndex = Math.floor(Math.random() * projects.length);
		setSelectedProject(projects[randomIndex]);
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
						{selectedProject && (
							<div>
								<h2 className='text-center lg:text-2xl mt-3 font-mono'>
									{selectedProject.title}
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

export default About
