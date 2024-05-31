import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";
import React from "react";
import { APlanet } from "../../service/planetService/swAPI.planetTypes";


interface APlanetProps {
	planet: APlanet;
}

const APlanetCard: React.FC<APlanetProps> = ({planet}) => {
  return (
	<>
	<h1 className='font-starwars'>Planet</h1>

	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Title className='font-starwars'>{planet.name}</Card.Title>
		</Card.Body>

		<ListGroup className="list-group-flush">

			<ListGroup.Item>Rotation-period:  {planet.rotation_period}</ListGroup.Item>
			<ListGroup.Item>Orbital-period: {planet.orbital_period}</ListGroup.Item>
			<ListGroup.Item>Diameter: {planet.diameter}</ListGroup.Item>
			<ListGroup.Item>Climate: {planet.climate}</ListGroup.Item>
			<ListGroup.Item>Gravity: {planet.gravity}</ListGroup.Item>
			<ListGroup.Item>Terrain: {planet.terrain}</ListGroup.Item>
			<ListGroup.Item>Surface water: {planet.surface_water}</ListGroup.Item>
			<ListGroup.Item>Poupulation: {new Intl.NumberFormat().format(Number(planet.population))}</ListGroup.Item>
		</ListGroup>

			<h5 className='font-starwars mt-4'>
				Residents on {planet.name}:
			</h5>
			{planet.residents.map(resident =>
				<ListGroup key={resident.id}>
					<ListGroup.Item >
					<Link className='link-card' to={`/people/${resident.id}`}>
						{resident.name}
					</Link>
					</ListGroup.Item>
				</ListGroup>

			)}

			<h5 className='font-starwars mt-4'>
				Seen in:
			</h5>
				{planet.films.map(film =>
					<ListGroup key={film.id} >
						<ListGroup.Item  >
						<Link className="link-card" to={`/films/${film.id}`}>
							{film.title}
						</Link>
						</ListGroup.Item>
					</ListGroup>
				)}

	</Card>
	</>
  )
}

export default APlanetCard
