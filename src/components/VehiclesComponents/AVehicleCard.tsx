import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";

import { Link } from "react-router-dom";
import React from "react";
import { AVehicle } from "../../service/vehicleService/swAPI.vehiclesTypes";


interface AVehicleProps {
	vehicle: AVehicle;
}

const AVehicleCard: React.FC<AVehicleProps> = ({vehicle}) => {
	return (
	<>
	  	<h1 className='font-starwars'>Vehicle</h1>

	<Card className='bg-dark row rounded col-10 p-2'>
		<Card.Body>
			<Card.Title className='font-starwars'>{vehicle.name}</Card.Title>
		</Card.Body>

		<ListGroup className="list-group-flush">
			<ListGroup.Item>Vehicle model: {vehicle.model}</ListGroup.Item>
			<ListGroup.Item>Vehicle class: {vehicle.vehicle_class}</ListGroup.Item>
			<ListGroup.Item>Manufacturer: {vehicle.manufacturer}</ListGroup.Item>
			<ListGroup.Item>Cost in credits: {vehicle.cost_in_credits === "unknown" ? "unknown" : new Intl.NumberFormat().format(Number(vehicle.cost_in_credits))}</ListGroup.Item>
			<ListGroup.Item>Length: {vehicle.length}</ListGroup.Item>
			<ListGroup.Item>Crewcount: {vehicle.crew}</ListGroup.Item>
			<ListGroup.Item>Passengerscount: {vehicle.passengers}</ListGroup.Item>
			<ListGroup.Item>Max atmosphering speed: {vehicle.max_atmosphering_speed}</ListGroup.Item>
			<ListGroup.Item>Cargo capacity: {new Intl.NumberFormat().format(Number(vehicle.cargo_capacity))}</ListGroup.Item>
			<ListGroup.Item>Consumables: {vehicle.consumables}</ListGroup.Item>
		</ListGroup>

		 <h5 className='font-starwars mt-4'>
				Pilots of {vehicle.name}:
			</h5>
			{vehicle.pilots.length > 0 ?
			(
			vehicle.pilots.map(pilot =>
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
					No pilots for this vehicle
				</ListGroup.Item>
				</ListGroup>

			)}


			<h5 className='font-starwars mt-4'>
				Seen in:
			</h5>
				{vehicle.films.map(film =>
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

export default AVehicleCard
