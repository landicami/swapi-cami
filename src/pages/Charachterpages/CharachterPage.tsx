import { useEffect, useState } from 'react'
import { CharactherResponse } from '../../service/charService/swAPI.chartypes'
import { getPeople, searchACharachter } from '../../service/charService/swAPI.char';

//Bootstrap
import  Container  from 'react-bootstrap/Container';
import GalaxyForm from '../../components/GalaxyForm';
import CharachterCardInfo from '../../components/CharachterComponents/CharachterCardInfo';
import { Link } from 'react-router-dom';

const CharachterPage = () => {
	const [ people, setPeople ] = useState<CharactherResponse | null>(null);
	const [ error, setError ] = useState<string | false>(false)
	const [isLoading, setIsLoading] = useState(false);


	const getAlllCharachters = async () => {
		setIsLoading(true);
		try {
			const data = await getPeople();
			setPeople(data);
		} catch (err) {
			if (err instanceof Error){
				setError(err.message)
			} else {
				setError("NOPE NOPE AND ANOTHER NOPE")
			}
		}
		setIsLoading(false);

	}

	const searchGalaxyCharachter = async (galaxySearch: string) => {
		setIsLoading(true)
		try {
			const data = await searchACharachter(galaxySearch);
			setPeople(data);
			setError(false)
		} catch (err) {
			if(err instanceof Error) {
				setError(err.message)
			} else {
				setError("Wrong something went, galaxy wrong it was!")
			}
		}
		setIsLoading(false)

	  }

	useEffect(() => {
		getAlllCharachters();
	}, [])

  return (
	<Container className='row'>

		<h1 className='font-starwars mt-2'>Charachters</h1>

		<GalaxyForm
		onSearchGalaxy={searchGalaxyCharachter}/>

		{isLoading && (
				<Container className='bg-dark'>
					<p className='font-starwars'>Loading...</p>
				</Container>
			)}

			{error && (
				<Container className='bg-dark'>
					<p className='font-starwars'>{error}</p>
				</Container>
			)}

			<CharachterCardInfo
				data={people} />

		<div>
			<Link to={"/people"} className='btn btn-warning mt-4' role='button' onClick={getAlllCharachters}>Get all charachters</Link>
		</div>

	</Container>
)
}


export default CharachterPage
