import { useEffect, useState } from 'react'
import { getMovies } from '../service/filmService/swAPI.films';
import  Container  from 'react-bootstrap/Container';
import { FilmResponse } from '../service/filmService/swAPI.filmTypes';
import FilmCardInfo from '../components/FilmCardInfo';

const FilmPage = () => {
  const [films, setFilms] = useState<FilmResponse | null>(null);
  const [error, setError] = useState<string | false>(false);

  const getAllMovies = async () => {
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
  }

  useEffect(()=> {
	getAllMovies();
  }, [])

  return (
    <Container className='background'>

    	<h1 className='font-starwars'>MoviePage</h1>

		{error && (
			<Container className='bg-dark'>
				<p className='font-starwars'>{error}</p>
			</Container>
		)}

		<FilmCardInfo
		data={films}
		/ >

    </Container>
  )
}

export default FilmPage
