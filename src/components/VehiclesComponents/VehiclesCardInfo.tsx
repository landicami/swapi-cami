import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { VehicleResponse } from '../../service/vehicleService/swAPI.vehiclesTypes';

interface CardInfoProps {
data: VehicleResponse | null
}

const VehiclesCardInfo: React.FC<CardInfoProps> = ({ data }) => {
  return (
	<Container className='row rounded'>
				{data && data.data.length > 0 ? (

					<>
					 {data.data.map(vehicles =>
					 <Container key={vehicles.id} className='col-12 col-md-6 col-lg-4 mb-3 mt-3 '>
						<Card className='border border-warning'>
								<Card.Body>
								<div className='d-flex flex-column align-items-center'>
									<h5 className='font-starwars'>{vehicles.name}</h5>
								</div>

								<Card.Text className='mt-2'>
									Model: {vehicles.model}
								</Card.Text>
								</Card.Body>

								<div className='col-6 mb-2'>
									<Link to={`/vehicles/${vehicles.id}`} className='link-starwars ps-3'>Read more...</Link>
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

export default VehiclesCardInfo
