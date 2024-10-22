import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import { CharactherResponse } from '../../service/charService/swAPI.chartypes'
import { getAllCharachters, searchACharachter } from '../../service/charService/swAPI.char';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import CharachterCardInfo from '../../components/CharachterComponents/CharachterCardInfo';
import Pagination from '../../components/Pagination';


const CharachterPage = () => {
	const [ people, setPeople ] = useState<CharactherResponse | null>(null);
	const [ error, setError ] = useState<string | false>(false)
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const searchParamsQuery = searchParams.get("query");
	const pageParams = Number(searchParams.get("page")) || 1;

	const searchGalaxyCharachter = async (galaxySearch: string = "") => {
		setSearchParams({query: galaxySearch.trim(), page: "1"})
    };

    const getCharachterData = async () => {
        setIsLoading(true);
        try {
            const data = searchParamsQuery
                ? await searchACharachter(searchParamsQuery, pageParams)
                : await getAllCharachters(pageParams);
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
		setSearchParams({ query: "", page: "1"});
	}

    useEffect(() => {
        getCharachterData();
    }, [pageParams, searchParamsQuery]);


	return (
	<>
	<h1 className='font-starwars'>Characters</h1>

	<Container className='row'>

		<GalaxyForm
		onSearchGalaxy={searchGalaxyCharachter}
		/>

	{ people &&
		<Pagination
		page={pageParams}
		totalPages={people.last_page}
		hasNextPage={pageParams < people.last_page}
		hasPreviousPage={pageParams < people.from}
		onNextPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams + 1).toString() })}
		onPreviousPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams - 1).toString() })}
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
			<p className='font-starwars mt-3'>{people.total} characters, {people.per_page} characters per page</p>
		}

		{searchParamsQuery &&
			<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>
		}

		<CharachterCardInfo
			data={people}
		/>

		<div>
			<Link to={"/people"} className='btn btn-warning mt-4' role='button' onClick={() => execute()}>
				Get all charachters
			</Link>
		</div>

	</Container>
	</>
)
}


export default CharachterPage
