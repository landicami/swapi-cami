import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { PlanetResponse } from '../../service/planetService/swAPI.planetTypes';

interface CardInfoProps {
data: PlanetResponse | null
}

const PlanetCardInfo: React.FC<CardInfoProps> = ({data}) => {
  return (
	<Container className='row rounded'>
				{data && data.data.length > 0 ? (

					<>
					 {data.data.map(planet =>
					 <Container key={planet.id} className='col-12 col-md-6 col-lg-4 mb-3 mt-3 '>
						<Card className='border border-warning'>
								<Card.Body>
								<div className='d-flex flex-column align-items-center'>
									<h5 className='font-starwars'>{planet.name}</h5>
								</div>

								<Card.Text className='mt-2'>
									In: {planet.films_count} movies <br/>
									Terrain: {planet.terrain}
								</Card.Text>
								</Card.Body>

								<div className='col-6 mb-2'>
									<Link to={`/planets/${planet.id}`} className='link-starwars ps-3'>Read more...</Link>
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

export default PlanetCardInfo
