import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Api stuff
import { StarshipResponse } from '../../service/starshipService/swAPI.starshipsTypes';
import { getStarships, searchAStarship } from '../../service/starshipService/swAPI.species';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import Pagination from '../../components/Pagination';
import StarshipsCardInfo from '../../components/StarshipsComponents/StarshipsCardInfo';


const Starshipspage = () => {
	const [starships, setStarships] = useState<StarshipResponse | null>(null);
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	// const [page, setPage] = useState(1);
	// const [searchQuery, setSearchQuery] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamsQuery = searchParams.get("query");
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchGalaxyStarship = async ( galaxySearch: string) => {
		// setPage(1);
		setSearchParams({query: galaxySearch.trim(), page: "1"})

		// setSearchQuery(galaxySearch);
	}

	const getStarshipData = async () => {
		setIsLoading(true)
	try {
		const data = searchParamsQuery
		? await searchAStarship(searchParamsQuery, pageParams)
		: await getStarships(pageParams)
		setStarships(data);
		setIsLoading(false)

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

	const execute = () => {
		// setPage(1)
		// setSearchQuery("")
		setSearchParams({ query: "", page: "1"});

	}

	useEffect(()=> {
		getStarshipData();
	}, [pageParams, searchParamsQuery])

  return (
    <>

    	<h1 className='font-starwars'>Starships</h1>
		<GalaxyForm
		onSearchGalaxy={searchGalaxyStarship}
		/>

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

		{starships && <Pagination
		page={pageParams}
		totalPages={starships.last_page}
		hasNextPage={pageParams < starships.last_page}
		hasPreviousPage={pageParams < starships.from}
		onNextPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams + 1).toString() })}
		onPreviousPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams - 1).toString() })}

		/>}

		{starships &&
		<p className='font-starwars mt-3'>{starships.total} starships, {starships.per_page} starships max per page</p>
		}

		{searchParamsQuery &&
					<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>

		}

		<StarshipsCardInfo
		data={starships}
		/ >


		<Link to={"/starships"} className='btn btn-warning mt-4' role='button' onClick={execute}>Get all starships</Link>



    </>
  )
}

export default Starshipspage
