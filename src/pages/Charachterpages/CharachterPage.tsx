import { useEffect, useState } from 'react'
import { CharactherResponse } from '../../service/charService/swAPI.chartypes'
import { getAllPeople, searchACharachter } from '../../service/charService/swAPI.char';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import CharachterCardInfo from '../../components/CharachterComponents/CharachterCardInfo';
import Pagination from '../../components/Pagination';

import { Link } from 'react-router-dom';

const CharachterPage = () => {
	const [ people, setPeople ] = useState<CharactherResponse | null>(null);
	const [ error, setError ] = useState<string | false>(false)
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");


	// const getCharachters = async (page: number = 1) => {
	// 	setPage(1);
	// 	setSearchQuery("");
	// 	setIsLoading(true);
	// 	setPeople(null);
	// 	try {
	// 		const data = await getAllPeople(page);
	// 		setPeople(data);
	// 		setError(false);
	// 	} catch (err) {
	// 		if (err instanceof Error){
	// 			setError(err.message)
	// 		} else {
	// 			setError("NOPE NOPE AND ANOTHER NOPE")
	// 		}
	// 	}
	// 	setIsLoading(false);

	// }
	const searchGalaxyCharachter = async (galaxySearch: string = "") => {
        setPage(1);
        setSearchQuery(galaxySearch);
    };

    const getCharachterData = async () => {
        setIsLoading(true);
        try {
            const data = searchQuery
                ? await searchACharachter(searchQuery, page)
                : await getAllPeople(page);
            setPeople(data);
            setError(false);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Wrong something went, galaxy wrong it was!");
            }
        }
        setIsLoading(false);
    };

	const execute = () => {
		setPage(1)
		setSearchQuery("")
	}

    useEffect(() => {
        getCharachterData();
    }, [page, searchQuery]);




  return (
	<Container className='row'>

		<h1 className='font-starwars mt-2'>Charachters</h1>

		<GalaxyForm
		onSearchGalaxy={searchGalaxyCharachter}
		/>


	{ people &&
		<Pagination
		data={people}
		hasNextPage={people.next_page_url !== null}
		hasPreviousPage={people.prev_page_url !== null}
		onNextPage={() => { setPage(prevValue => prevValue + 1) }}
		onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}

		/>}

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
			<Link to={"/people"} className='btn btn-warning mt-4' role='button' onClick={() => execute()}>Get all charachters</Link>
		</div>

	</Container>
)
}


export default CharachterPage
