import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";
import React from "react";
import { AStarship } from "../../service/starshipService/swAPI.starshipsTypes";


interface AStarshipProps {
	starship: AStarship;
}

const AStarshipCard: React.FC<AStarshipProps> = ({starship}) => {
  return (
	<>
	  	<h1 className='font-starwars'>Starship</h1>

	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Title className='font-starwars'>{starship.name}</Card.Title>
		</Card.Body>

		<ListGroup className="list-group-flush">

			<ListGroup.Item>Starship model: {starship.model}</ListGroup.Item>
			<ListGroup.Item>Starship class: {starship.starship_class}</ListGroup.Item>
			<ListGroup.Item>Manufacturer: {starship.manufacturer}</ListGroup.Item>
			<ListGroup.Item>Cost in credits: {new Intl.NumberFormat().format(Number(starship.cost_in_credits))}</ListGroup.Item>
			<ListGroup.Item>Length: {starship.length}</ListGroup.Item>
			<ListGroup.Item>Crewcount: {starship.crew}</ListGroup.Item>
			<ListGroup.Item>Passengerscount: {starship.passengers}</ListGroup.Item>
			<ListGroup.Item>Max atmosphering speed: {starship.max_atmosphering_speed}</ListGroup.Item>
			<ListGroup.Item>Hyperdrive rating: {starship.hyperdrive_rating}</ListGroup.Item>
			<ListGroup.Item>MGLT {starship.MGLT}</ListGroup.Item>
			<ListGroup.Item>Cargo capacity: {new Intl.NumberFormat().format(Number(starship.cargo_capacity))}</ListGroup.Item>
			<ListGroup.Item>Consumables: {starship.consumables}</ListGroup.Item>

		</ListGroup>

		 <h5 className='font-starwars mt-4'>
				Pilots of {starship.name}:
			</h5>
			{starship.pilots.length > 0 ?
			(
			starship.pilots.map(pilot =>
				<Link key={pilot.id} to={`/people/${pilot.id}`}>
					<ListGroup>
						<ListGroup.Item className='link-card'>
							{pilot.name}
						</ListGroup.Item>
					</ListGroup>
				</Link>)
			)
			: (<ListGroup>
				<ListGroup.Item>
					No pilots for this starship
				</ListGroup.Item>
				</ListGroup>

			)}


			<h5 className='font-starwars mt-4'>
				Seen in:
			</h5>
				{starship.films.map(film =>
				<Link key={film.id} to={`/films/${film.id}`}>
					<ListGroup>
						<ListGroup.Item className="link-card">
							{film.title}
						</ListGroup.Item>
					</ListGroup>
					</Link>
				)}

	</Card>
	</>
  )
}

export default AStarshipCard
