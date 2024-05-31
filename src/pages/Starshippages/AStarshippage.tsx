import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container';

import { AStarship } from '../../service/starshipService/swAPI.starshipsTypes';
import { getAStarship } from '../../service/starshipService/swAPI.starships';
import AStarshipCard from '../../components/StarshipsComponents/AStarshipCard';


const AStarshippage = () => {
	const [starship, setStarship] = useState<AStarship | null>(null)
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const starshipId = Number(id);

	const getOneShipfromAPI = async (starshipId: number) => {
		setIsLoading(true)

		try {
			const data = await getAStarship(starshipId);
			setStarship(data);
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
		getOneShipfromAPI(starshipId)
	}, [starshipId]);

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

			{starship && <AStarshipCard starship={starship} />}

			<Link to={"/starships"} className='btn btn-warning mt-4 me-2' role='button'>Back to all starships</Link>

	</Container>

  )
}

export default AStarshippage
