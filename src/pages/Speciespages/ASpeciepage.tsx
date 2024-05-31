import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import { ASpecie } from '../../service/specieService/swAPI.specieTypes';
import { getASpecie } from '../../service/specieService/swAPI.species';
import ASpecieCard from '../../components/SpeciesComponents/ASpecieCard';


const ASpeciepage = () => {
	const [specie, setSpecie] = useState<ASpecie | null>(null)
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const specieId = Number(id);

	const getOnePSpeciefromAPI = async (specieId: number) => {
		setIsLoading(true)

		try {
			const data = await getASpecie(specieId);
			setSpecie(data);
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
		getOnePSpeciefromAPI(specieId)
	}, [specieId]);

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

			{specie && <ASpecieCard specie={specie} />}

			<Link to={"/species"} className='btn btn-warning mt-4 me-2' role='button'>Back to all species</Link>

	</Container>

  )
}

export default ASpeciepage
