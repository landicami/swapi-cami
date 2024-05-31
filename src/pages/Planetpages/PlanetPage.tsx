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
	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamsQuery = searchParams.get("query");
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchGalaxyPlanet = async ( galaxySearch: string) => {
		setSearchParams({query: galaxySearch.trim(), page: "1"})
	}

	const getPlanetData = async () => {
		setIsLoading(true)
		try {
			const data = searchParamsQuery
			? await searchAPlanet(searchParamsQuery, pageParams)
			: await getPlanets(pageParams)
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
		setSearchParams({ query: "", page: "1"});
	}

	useEffect(()=> {
		getPlanetData();
	}, [pageParams, searchParamsQuery])

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
		page={pageParams}
		totalPages={planets.last_page}
		hasNextPage={pageParams < planets.last_page}
		hasPreviousPage={pageParams < planets.from}
		onNextPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams + 1).toString() })}
		onPreviousPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams - 1).toString() })}
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
