import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { FilmResponse } from '../service/filmService/swAPI.filmTypes';

interface CardInfoProps {
data: FilmResponse | null;
}

const FilmCardInfo: React.FC<CardInfoProps> = ({data}) => {
  return (
	<Container className='bg-dark row rounded'>
				{data && data.data.length > 0 && (

					<>
					 {data.data.map(film =>
					 <div key={film.id} className='col-12 col-md-6 col-lg-6 mb-3 mt-3'>
					<Card>
      					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
     						<Card.Body>
								<Card.Title className='font-starwars'>{film.title}</Card.Title>
								<Card.Text>
								Producer: {film.producer} <br/>
								Director: {film.director}
								</Card.Text>

							<Link to="/" className='btn btn-warning' role='button'>{film.title}</Link>
      						</Card.Body>
   					 </Card>
					 </div>
					)}
					</>
				)
				}
		</Container>
  )
}

export default FilmCardInfo
