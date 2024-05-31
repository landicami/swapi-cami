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
  	<>
  	<h1 className='font-starwars'>Specie</h1>

	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Title className='font-starwars'>{specie.name}</Card.Title>
		</Card.Body>

		<ListGroup className="list-group-flush">
			<ListGroup.Item>Classification: {specie.classification}</ListGroup.Item>
			<ListGroup.Item>Designation: {specie.designation}</ListGroup.Item>
			<ListGroup.Item>Average height: {specie.average_height}</ListGroup.Item>
			<ListGroup.Item>Average lifespan: {specie.average_lifespan}</ListGroup.Item>
			<ListGroup.Item>Eye colors: {specie.eye_colors}</ListGroup.Item>
			<ListGroup.Item>Hair colors: {specie.hair_colors}</ListGroup.Item>
			<ListGroup.Item>Skin colors: {specie.skin_colors}</ListGroup.Item>
			<ListGroup.Item>Language: {specie.language}</ListGroup.Item>
		</ListGroup>

			<h5 className='font-starwars mt-4'>
				Examples of {specie.name}:
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

			<h5 className='font-starwars mt-4'>
				Seen in:
			</h5>
				{specie.films.map(film =>
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

export default ASpecieCard
