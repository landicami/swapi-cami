import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";
import React from "react";
import { ASpecie } from "../../service/specieService/swAPI.specieTypes";


interface ASpecieProps {
	specie: ASpecie;
}

const ASpecieCard: React.FC<ASpecieProps> = ({specie}) => {
  return (
	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Title className='font-starwars'>{specie.name}</Card.Title>
		</Card.Body>

		<ListGroup className="list-group-flush">

			{/* <ListGroup.Item>Rotation-period:  {planet.rotation_period}</ListGroup.Item> */}

		</ListGroup>

			<h5 className='font-starwars mt-4'>
				People of {specie.name}:
			</h5>
			{specie. people.map(s =>
				<Link key={s.id} to={`/people/${s.id}`}>
					<ListGroup>
						<ListGroup.Item className='link-card'>
							{s.name}
						</ListGroup.Item>
					</ListGroup>
				</Link>
			)}
{/*
			<h5 className='font-starwars mt-4'>
				Seen in:
			</h5>
				{planet.films.map(film =>
				<Link key={film.id} to={`/film/${film.id}`}>
					<ListGroup>
						<ListGroup.Item className="link-card">
							{film.title}
						</ListGroup.Item>
					</ListGroup>
					</Link>
				)} */}

	</Card>
  )
}

export default ASpecieCard
