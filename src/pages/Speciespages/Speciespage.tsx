import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Api stuff
import { SpecieResponse } from '../../service/specieService/swAPI.specieTypes';
import { getSpecies, searchASpecie } from '../../service/specieService/swAPI.species';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import Pagination from '../../components/Pagination';
import SpeciesCardInfo from '../../components/SpeciesComponents/SpeciesCardInfo';


const Speciespage = () => {
	const [species, setSpecies] = useState<SpecieResponse | null>(null);
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	// const [page, setPage] = useState(1);
	// const [searchQuery, setSearchQuery] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamsQuery = searchParams.get("query");
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchGalaxySpecies = async ( galaxySearch: string) => {
		// setPage(1);
		setSearchParams({query: galaxySearch.trim(), page: "1"})

		// setSearchQuery(galaxySearch);
	}

	const getSpeciesData = async () => {
		setIsLoading(true)
	try {
		const data = searchParamsQuery
		? await searchASpecie(searchParamsQuery, pageParams)
		: await getSpecies(pageParams)
		setSpecies(data);
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
		getSpeciesData();
	}, [pageParams, searchParamsQuery])

  return (
    <>

    	<h1 className='font-starwars'>Planets</h1>
		<GalaxyForm
		onSearchGalaxy={searchGalaxySpecies}
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

		{species && <Pagination
		page={pageParams}
		totalPages={species.last_page}
		hasNextPage={pageParams < species.last_page}
		hasPreviousPage={pageParams < species.from}
		onNextPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams + 1).toString() })}
		onPreviousPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams - 1).toString() })}

		/>}

		{species &&
		<p className='font-starwars mt-3'>{species.total} species, {species.per_page} species max per page</p>
		}

		{searchParamsQuery &&
					<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>

		}

		<SpeciesCardInfo
		data={species}
		/ >


		<Link to={"/species"} className='btn btn-warning mt-4' role='button' onClick={execute}>Get all species</Link>



    </>
  )
}

export default Speciespage
