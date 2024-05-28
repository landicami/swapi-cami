import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { ACharachterResponse } from '../../service/charService/swAPI.chartypes';


interface ACharachterProps {
	data: ACharachterResponse
}

const ACharachterCard: React.FC<ACharachterProps> = ({ data }) => {
  return (
	<>
	<h1 className='font-starwars'>Charachter</h1>

	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Img
  			src={data.image_url}
  			className='picture-in-card'
  			/>
			<Card.Title className='font-starwars'>
				{data.name}
			</Card.Title>
        </Card.Body>

		<ListGroup className="list-group-flush">

			<ListGroup.Item>Height:  {data.height} cm</ListGroup.Item>
			<ListGroup.Item>Weight:  {data.mass} kg</ListGroup.Item>
			<ListGroup.Item>Birthyear:  {data.birth_year}</ListGroup.Item>
			<ListGroup.Item>Eye-color:  {data.eye_color}</ListGroup.Item>
			<ListGroup.Item>Hair-color:  {data.hair_color}</ListGroup.Item>
			<ListGroup.Item>Skin-color:  {data.skin_color}</ListGroup.Item>
			<ListGroup.Item><Link to={data.wiki_link}>Wiki-link</Link></ListGroup.Item>
			<ListGroup.Item>Hair-color:  {data.hair_color}</ListGroup.Item>
			<ListGroup.Item><strong>Home-world:</strong>  {data.homeworld.name}</ListGroup.Item>
		</ListGroup>

			<h5 className='font-starwars mt-4'>
				Affiliations:
			</h5>
			<ListGroup className='ms-3'>
				{data.affiliations.length > 0
					? (
						data.affiliations.map((affiliation, index) => (
							<ListGroup.Item key={index}>
								{affiliation}
							</ListGroup.Item>
						))
					) : (
						<ListGroup.Item>
							"No affiliations for this character"
						</ListGroup.Item>
					)
				}
			</ListGroup>

			{data.films.length > 0 &&
				<>
				<h5 className='font-starwars mt-4'>
					Stars in:
				</h5>
				<ListGroup>
					{data.films.map(film =>
						<Link key={film.id} to={`/films/${film.id}`}>
							<ListGroup.Item className='link-card' >
								{film.title}
							</ListGroup.Item>
						</Link>
					)}
				</ListGroup>
				</>
				}


				<h5 className='font-starwars mt-4'>
					Species:
				</h5>
				{data.species.length > 0
				? (
					<>
						{data.species.map(specie => (
							<ListGroup key={specie.name}>
								<ListGroup.Item>
									{specie.name}
								</ListGroup.Item>
							</ListGroup>
						))}
					</>
				) : (
					<ListGroup>
						<ListGroup.Item>
							No species for this character
						</ListGroup.Item>
					</ListGroup>
				)
				}

				<h5 className='font-starwars mt-4'>
					Vehicles used:
				</h5>
					{data.vehicles.length > 0
					? (
					<>
						{data.vehicles.map(vehicle => (
							<ListGroup key={vehicle.id}>
								<ListGroup.Item>
									{vehicle.name}
								</ListGroup.Item>
							</ListGroup>
						))}
					</>
					) : (
					<ListGroup>
						<ListGroup.Item>
							No vehicles for this character
						</ListGroup.Item>
					</ListGroup>
					)
					}

	</Card>
	</>
  )
}

export default ACharachterCard
