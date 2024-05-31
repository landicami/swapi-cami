import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container';

import { AVehicle } from '../../service/vehicleService/swAPI.vehiclesTypes';
import { getAVehicle } from '../../service/vehicleService/swAPI.vehicles';
import AVehicleCard from '../../components/VehiclesComponents/AVehicleCard';


const AVehiclepage = () => {
	const [vehicle, setVehicle] = useState<AVehicle | null>(null)
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const vehicleId = Number(id);

	const getOneVehiclefromAPI = async (vehicleId: number) => {
		setIsLoading(true)

		try {
			const data = await getAVehicle(vehicleId);
			setVehicle(data);
		}catch (err){
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("ERROR for all what it's worth");
			}
		}
		setIsLoading(false)
	}

	useEffect(()=> {
		getOneVehiclefromAPI(vehicleId)
	}, [vehicleId]);

  return (
	<Container>

		{error && (
				<Container className='bg-dark'>
					<p className='font-starwars'>{error}</p>
				</Container>
			)}

			{isLoading && (
				<Container className='bg-dark'>
					<p className='font-starwars'>Loading...</p>
				</Container>
			)}

			{vehicle && <AVehicleCard vehicle={vehicle} />}

			<Link to={"/vehicles"} className='btn btn-warning mt-4 me-2' role='button'>Back to all vehicles</Link>


	</Container>

  )
}

export default AVehiclepage
