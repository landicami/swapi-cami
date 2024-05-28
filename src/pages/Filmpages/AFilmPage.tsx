import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getAMovie } from '../../service/filmService/swAPI.films';
import { SingleFilm } from '../../service/filmService/swAPI.filmTypes';

import Container from "react-bootstrap/Container";

import AFilmCard from '../../components/FilmComponents/AFilmCard';

const AFilmPage = () => {
	const [film, setFilm] = useState<SingleFilm | null>(null);
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();
	const filmId = Number(id)

	const getOneFilmfromAPI = async (filmId: number) => {
		setIsLoading(true)

		try {
			const data = await getAMovie(filmId);
			setFilm(data);
		}catch (err){
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("ERROR for all what it's worth");
			}
		}
		setIsLoading(false)

	}

	useEffect(()=>{
		getOneFilmfromAPI(filmId)
	}, [])

  return (
	<Container className='m-auto'>
			<div className='row'>
				<div className='col 6'>
					<h1 className='font-starwars'>Film</h1>
				</div>

				<div className='col-4 justify-contend-end'>
					<Link to={"/films"} className='btn btn-warning mt-4' role='button'>Back to films</Link>
				</div>
			</div>

			{error && (
				<Container className='bg-dark'>
					<p className='font-starwars'>{error}</p>
				</Container>
			)}

			{isLoading && (
				<Container className='bg-dark'>
					<p className='font-starwars'>Loading...</p>
				</Container>
			)}

			{film && (
				<AFilmCard
				film={film}
				/>
			)}
	</Container>
  )
}

export default AFilmPage
