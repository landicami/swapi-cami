import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");


//   const getAllMovies = async (page: number = 1) => {
// 	setPage(1)
// 	setSearchQuery("")
// 	setIsLoading(true)
// 	setFilms(null)
//     try {
//       const data = await getMovies(page);
//       setFilms(data);
// 	  setError(false)
//     } catch (err){
// 		if (err instanceof Error) {
// 			setError(err.message);
// 		} else {
// 			setError("ERROR for all what it's worth");
// 		}
// 	}
// 	setIsLoading(false);
//   }

  const searchGalaxyFilm = async ( galaxySearch: string) => {
	setPage(1);
	setSearchQuery(galaxySearch);
  }

  const getFilmData = async () => {
	setIsLoading(true)
	try {
		const data = searchQuery
		? await searchAMovie(searchQuery)
		: await getMovies()
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
	setPage(1)
	setSearchQuery("")
}

  useEffect(()=> {
	getFilmData();
  }, [page, searchQuery])

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
		data={films}
		hasNextPage={films.next_page_url !== null}
		hasPreviousPage={films.prev_page_url !== null}
		onNextPage={() => { setPage(prevValue => prevValue + 1) }}
		onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}


		/>}

		<FilmCardInfo
		data={films}
		/ >


		<Link to={"/films"} className='btn btn-warning mt-4' role='button' onClick={execute}>Get all films</Link>



    </>
  )
}

export default FilmPage
