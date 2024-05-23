import { useEffect, useState } from 'react'
import { CharactherResponse } from '../../service/charService/swAPI.chartypes'
import { getPeople, searchACharachter } from '../../service/charService/swAPI.char';

//Bootstrap
import Card from "react-bootstrap/Card";
import  Container  from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import GalaxyForm from '../../components/GalaxyForm';

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

		<h1 className='font-starwars'>Charachters</h1>

		<GalaxyForm
		onSearchGalaxy={searchGalaxyCharachter}/>


			{people && people.data.length > 0 && (
				<>

				<div className='col-12 mb-3 mt-3'>
					<p className='font-starwars'>There are {people.total} charachters. Showing {people.per_page} charachers per page</p>
				</div>



				{people.data.map(charachter =>
					<Container key={charachter.id} className='col-12 col-md-6 col-lg-4 mb-3 mt-3 '>
						<Card className='border border-warning'>
							<Card.Body>
							<div className='d-flex flex-column align-items-center'>
							<Link to={`/people/${charachter.id}`} className='btn btn-outline-warning btn-lg font-starwars' role='button'>{charachter.name}</Link>
							</div>

							<Card.Text className='mt-2'>
								In {charachter.films_count} films
							</Card.Text>
							</Card.Body>
							{/* <Card.Img variant="bottom" src={film.image_url}/> */}

							</Card>
					</Container>
					)}
					</>
					)}
	</Container>
)
}


export default CharachterPage
