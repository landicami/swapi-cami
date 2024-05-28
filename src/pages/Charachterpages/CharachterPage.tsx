import { useEffect, useState } from 'react'
import { CharactherResponse } from '../../service/charService/swAPI.chartypes'
import { getAllPeople, searchACharachter } from '../../service/charService/swAPI.char';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import CharachterCardInfo from '../../components/CharachterComponents/CharachterCardInfo';
import Pagination from '../../components/Pagination';

import { Link, useSearchParams } from 'react-router-dom';

const CharachterPage = () => {
	const [ people, setPeople ] = useState<CharactherResponse | null>(null);
	const [ error, setError ] = useState<string | false>(false)
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	// const [searchQuery, setSearchQuery] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();

	const searchParamsQuery = searchParams.get("query");


	const searchGalaxyCharachter = async (galaxySearch: string = "") => {
        setPage(1);
		setSearchParams({query: galaxySearch.trim()})


        // setSearchQuery(galaxySearch.trim());
    };

    const getCharachterData = async () => {
        setIsLoading(true);
        try {
            const data = searchParamsQuery
                ? await searchACharachter(searchParamsQuery, page)
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
		// setSearchQuery("")
		setSearchParams({});
	}

    useEffect(() => {
        getCharachterData();
    }, [page, searchParamsQuery]);




  return (
	<Container className='row'>

		<h1 className='font-starwars mt-2'>Charachters</h1>

		<GalaxyForm
		onSearchGalaxy={searchGalaxyCharachter}
		/>


	{ people &&
		<Pagination
		data={people}
		hasNextPage={page < people.last_page}
		hasPreviousPage={page < people.from}
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


		{people &&
		<p className='font-starwars mt-3'>{people.total} charachters, {people.per_page} charachers per page</p>
		}

		{searchParamsQuery &&
					<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>

		}

			<CharachterCardInfo
				data={people} />



		<div>
			<Link to={"/people"} className='btn btn-warning mt-4' role='button' onClick={() => execute()}>Get all charachters</Link>
		</div>

	</Container>
)
}


export default CharachterPage
