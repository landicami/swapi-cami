import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { FilmResponse } from '../../service/filmService/swAPI.filmTypes';

interface CardInfoProps {
	data: FilmResponse | null;
}

const FilmCardInfo: React.FC<CardInfoProps> = ({data}) => {
  return (
	<Container className='row rounded'>
		{data && data.data.length > 0 ? (

			<>
			{data.data.map(film =>
				<Container key={film.id} className='col-12 col-md-6 col-lg-4 mb-3 mt-3 '>
				<Card className='border border-warning'>
				<Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Card.Img
						variant="top"
						src={film.image_url}
						className='picture-in-card'
						alt="Picture of Star Wars Movie"
					/>
					</Card.Body>

						<Card.Body>
						<div className='d-flex flex-column align-items-center'>
							<h5 className='font-starwars'>{film.title}</h5>
						</div>

						<Card.Text className='mt-2'>
							Episode: {film.episode_id} <br/>
							Releasedate: {film.release_date}
						</Card.Text>
						</Card.Body>

						<div className='col-6 mb-2'>
							<Link to={`/films/${film.id}`} className='link-starwars ps-3'>Read more...</Link>
						</div>

				</Card>
				</Container>
			)}
			</>
		)
		:
		(
			<Container className='bg-dark mt-2 p-2 rounded'>
				<p className='font-starwars'>Try another search</p>
			</Container>
		)
		}
  </Container>
  )
}

export default FilmCardInfo
