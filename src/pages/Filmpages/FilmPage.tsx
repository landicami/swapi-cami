import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';


//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Api stuff
import { FilmResponse } from '../../service/filmService/swAPI.filmTypes';
import { getMovies, searchAMovie } from '../../service/filmService/swAPI.films';

//Components
import FilmCardInfo from '../../components/FilmComponents/FilmCardInfo';
import GalaxyForm from '../../components/GalaxyForm';
import Pagination from '../../components/Pagination';

const FilmPage = () => {
	const [films, setFilms] = useState<FilmResponse | null>(null);
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();

	const searchParamsQuery = searchParams.get("query");
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchGalaxyFilm = async ( galaxySearch: string) => {
		setSearchParams({query: galaxySearch.trim(), page: "1"})
	}

	const getFilmData = async () => {
		setIsLoading(true)
		try {
			const data = searchParamsQuery
			? await searchAMovie(searchParamsQuery, pageParams)
			: await getMovies(pageParams)
			setFilms(data);
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
		getFilmData();
	}, [searchParamsQuery])

  return (
    <>

    	<h1 className='font-starwars'>Films</h1>
		<GalaxyForm
		onSearchGalaxy={searchGalaxyFilm}
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

		{films && <Pagination
		page={pageParams}
		totalPages={films.last_page}
		hasNextPage={pageParams < films.last_page}
		hasPreviousPage={pageParams < films.from}
		onNextPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams + 1).toString() })}
		onPreviousPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams - 1).toString() })}
		/>}

		{films &&
			<p className='mt-2 font-starwars'>{films.total === 1 ? `There are ${films.total} film showing` : `There are ${films.total} films showing`}</p>
		}

		{searchParamsQuery &&
			<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>
		}

		<FilmCardInfo
		data={films}
		/ >

		<Link to={"/films"} className='btn btn-warning mt-4' role='button' onClick={execute}>Get all films</Link>
    </>
  )
}

export default FilmPage
