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

const FilmPage = () => {
  const [films, setFilms] = useState<FilmResponse | null>(null);
  const [error, setError] = useState<string | false>(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMovies = async () => {
	setIsLoading(true)
    try {
      const data = await getMovies();
      setFilms(data);
	  console.log(data);
	  setError(false)
    } catch (err){
		if (err instanceof Error) {
			setError(err.message);
		} else {
			setError("ERROR for all what it's worth");
		}
	}
	setIsLoading(false);
  }

  const searchGalaxyFilm = async (galaxySearch: string) => {
	setIsLoading(true)
	try {
		const data = await searchAMovie(galaxySearch);
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


  useEffect(()=> {
	getAllMovies();
  }, [])

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

		<FilmCardInfo
		data={films}
		/ >

		<Link to={"/films"} className='btn btn-warning mt-4' role='button' onClick={getAllMovies}>Get all films</Link>



    </>
  )
}

export default FilmPage
