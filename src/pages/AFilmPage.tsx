import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAMovie } from '../service/filmService/swAPI.films';
import { SingleFilm } from '../service/filmService/swAPI.filmTypes';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';

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
			console.log(data)
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
	<>
	    	<h1 className='font-starwars'>Film</h1>

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

				<Card className='bg-dark row rounded col-12'>
					<Card.Body>
						<Card.Title className='font-starwars'>{film.title} {film.episode_id}</Card.Title>
						<Card.Text>
						{film.opening_crawl}
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>Director: {film.director}</ListGroup.Item>
						<ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
						<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
					</ListGroup>
					<Card.Body>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
					</Card>

			)}

	<Link to={"/films"} className='btn btn-warning' role='button'>Back to films</Link>
	</>
  )
}

export default AFilmPage
