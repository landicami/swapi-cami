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
				{!data && <p>Try again!</p>}

				{data && data.data.length > 0 && (

					<>
					<div className='col-12 mb-3 mt-3'>
					<p className='font-starwars'>There are {data.total} films in total</p>
				</div>
					 {data.data.map(film =>
					 <Container key={film.id} className='col-12 col-md-6 col-lg-4 mb-3 mt-3 '>
						<Card className='border border-warning'>
								<Card.Body>
								<div className='d-flex flex-column align-items-center'>
								<Link to={`/films/${film.id}`} className='btn btn-outline-warning btn-lg font-starwars' role='button'>{film.title}</Link>
								</div>

								<Card.Text className='mt-2'>
									Episode: {film.episode_id} <br/>
									Releasedate: {film.release_date}
								</Card.Text>
								</Card.Body>
								{/* <Card.Img variant="bottom" src={film.image_url}/> */}

						</Card>
					 </Container>
					)}
					</>
				)
				}
  </Container>
  )
}

export default FilmCardInfo
