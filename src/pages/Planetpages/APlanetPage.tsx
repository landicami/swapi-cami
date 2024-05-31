import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { APlanet } from '../../service/planetService/swAPI.planetTypes';
import { getAPlanet } from '../../service/planetService/swAPI.planets';

import APlanetCard from '../../components/PlanetComponents/APlanetCard';

import Container from 'react-bootstrap/Container';


const APlanetPage = () => {
	const [planet, setPlanet] = useState<APlanet | null>(null)
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const planetId = Number(id);

	const getOnePlanetfromAPI = async (planetId: number) => {
		setIsLoading(true)

		try {
			const data = await getAPlanet(planetId);
			setPlanet(data);
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
		getOnePlanetfromAPI(planetId)
	}, [planetId]);

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

			{planet && <APlanetCard planet={planet} />}

			<Link to={"/planets"} className='btn btn-warning mt-4 me-2' role='button'>Back to all planets</Link>

	</Container>

  )
}

export default APlanetPage
