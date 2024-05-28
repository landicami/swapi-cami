import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Api stuff
import { PlanetResponse } from '../../service/planetService/swAPI.planetTypes';
import { getPlanets, searchAPlanet } from '../../service/planetService/swAPI.planets';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import Pagination from '../../components/Pagination';
import PlanetCardInfo from '../../components/PlanetComponents/PlanetCardInfo';

const PlanetPage = () => {
	const [planets, setPlanets] = useState<PlanetResponse | null>(null);
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	// const [searchQuery, setSearchQuery] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamsQuery = searchParams.get("query");


	const searchGalaxyPlanet = async ( galaxySearch: string) => {
		setPage(1);
		setSearchParams({query: galaxySearch.trim()})

		// setSearchQuery(galaxySearch);
	}

	const getPlanetData = async () => {
		setIsLoading(true)
	try {
		const data = searchParamsQuery
		? await searchAPlanet(searchParamsQuery, page)
		: await getPlanets(page)
		setPlanets(data);
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
		setPage(1)
		// setSearchQuery("")
		setSearchParams({});

	}

	useEffect(()=> {
		getPlanetData();
	}, [page, searchParamsQuery])

  return (
    <>

    	<h1 className='font-starwars'>Planets</h1>
		<GalaxyForm
		onSearchGalaxy={searchGalaxyPlanet}
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

		{planets && <Pagination
		data={planets}
		hasNextPage={page < planets.last_page}
		hasPreviousPage={page < planets.from}
		onNextPage={() => { setPage(prevValue => prevValue + 1) }}
		onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}


		/>}

		{planets &&
		<p className='font-starwars mt-3'>{planets.total} planets, {planets.per_page} planets max per page</p>
		}

		{searchParamsQuery &&
					<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>

		}

		<PlanetCardInfo
		data={planets}
		/ >


		<Link to={"/planets"} className='btn btn-warning mt-4' role='button' onClick={execute}>Get all planets</Link>



    </>
  )
}

export default PlanetPage
