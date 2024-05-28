import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";
import { SingleFilm } from "../../service/filmService/swAPI.filmTypes";
import React from "react";


interface AFilmProps {
	film: SingleFilm;
}

const AFilmCard: React.FC<AFilmProps> = ({film}) => {
  return (
	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Img
			src={film.image_url}
			className='picture-in-card'
			/>
			<Card.Title className='font-starwars'>{film.title}</Card.Title>
        		<Card.Text className="flex-grow-1">
            		{film.opening_crawl}
        		 </Card.Text>
		</Card.Body>

		<ListGroup className="list-group-flush">

			<ListGroup.Item>Episode:  {film.episode_id}</ListGroup.Item>
			<ListGroup.Item>Director: {film.director}</ListGroup.Item>
			<ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
			<ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>

		</ListGroup>

			<h5 className='font-starwars mt-4'>
				Charachters in {film.title}:
			</h5>
			{film.characters.map(charachter =>
				<Link key={charachter.id} to={`/people/${charachter.id}`}>
					<ListGroup>
						<ListGroup.Item className='link-card'>
							{charachter.name}
						</ListGroup.Item>
					</ListGroup>
				</Link>
			)}

			<h5 className='font-starwars mt-4'>
				Planets in {film.title}:
			</h5>
				{film.planets.map(planet =>
				<Link key={planet.id}  to={`/planets/${planet.id}`}>
					<ListGroup>
					<ListGroup.Item className='link-card'>
							{planet.name}
						</ListGroup.Item>
					</ListGroup>
					</Link>
				)}

				<h5 className='font-starwars mt-4'>
					Starships in {film.title}:
				</h5>
				{film.starships.map(ships =>
				<Link key={ships.id} to={`/starships/${ships.id}`}>
					<ListGroup>
					<ListGroup.Item className='link-card'>
							{ships.name}
						</ListGroup.Item>
					</ListGroup>
				</Link>
				)}

				<h5 className='font-starwars mt-4'>
					Vehicles in {film.title}:
				</h5>
				{film.vehicles.map(vehicle =>
				<Link key={vehicle.id} to={`/vehicles/${vehicle.id}`}>
					<ListGroup>
					<ListGroup.Item className='link-card'>
							{vehicle.name}
						</ListGroup.Item>
					</ListGroup>
					</Link>
				)}

				<h5 className='font-starwars mt-4'>
					Species in {film.title}:
				</h5>
				{film.species.map(specie =>
				<Link key={specie.id} to={`/species/${specie.id}`}>
					<ListGroup>
					<ListGroup.Item className='link-card'>
							{specie.name}
						</ListGroup.Item>
					</ListGroup>
					</Link>
				)}
	</Card>
  )
}

export default AFilmCard
