import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAMovie } from '../service/filmService/swAPI.films';
import { SingleFilm } from '../service/filmService/swAPI.filmTypes';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { ListGroupItem } from 'react-bootstrap';
import BacktoFilmBtn from '../components/BacktoFilmBtn';

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
	<Container className='m-auto'>
			<div className='row'>
				<div className='col 6'>
					<h1 className='font-starwars'>Film</h1>
				</div>
				<div className='col-4 justify-contend-end'>
					<BacktoFilmBtn/>
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

				<Card className='bg-dark row rounded col-10 p-2'>
					<Card.Body>
						<Card.Title className='font-starwars'>{film.title}</Card.Title>
                    		<Card.Text className="flex-grow-1">
                        		{film.opening_crawl}
                   			 </Card.Text>
					</Card.Body>

					<ListGroup className="list-group-flush">

						<ListGroup.Item>Episode:  {film.episode_id}</ListGroup.Item>
						<ListGroup.Item>Director: {film.director}</ListGroup.Item>
						<ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
						<ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>

					</ListGroup>

						<h5 className='font-starwars mt-4'>
							Charachters in {film.title}:
						</h5>
						{film.characters.map(charachter =>
						<Link to={`/people/${charachter.id}`}>
							<ListGroup>
								<ListGroup.Item className='link-card'>
									{charachter.name}
								</ListGroup.Item>
							</ListGroup>
							</Link>
						)}

						<h5 className='font-starwars mt-4'>
							Planets in {film.title}:
						</h5>
						{film.planets.map(planet =>
						// <Link to={`/planet/${planet.id}`}>
							<ListGroup>
								<ListGroup.Item>
									{planet.name}
								</ListGroup.Item>
							</ListGroup>
							// </Link>
						)}

						<h5 className='font-starwars mt-4'>
							Starships in {film.title}:
						</h5>
						{film.starships.map(ships =>
						// <Link to={`/starships/${ships.id}`}>
							<ListGroup>
								<ListGroup.Item>
									{ships.name}
								</ListGroup.Item>
							</ListGroup>
						)}

						<h5 className='font-starwars mt-4'>
							Vehicles in {film.title}:
						</h5>
						{film.vehicles.map(vehicle =>
						// <Link to={`/vehicles/${vehicle.id}`}>
							<ListGroup>
								<ListGroup.Item>
									{vehicle.name}
								</ListGroup.Item>
							</ListGroup>
							// </Link>
						)}

						<h5 className='font-starwars mt-4'>
							Species in {film.title}:
						</h5>
						{film.species.map(specie =>
						// <Link to={`/vehicles/${vehicle.id}`}>
							<ListGroup>
								<ListGroup.Item>
									{specie.name}
								</ListGroup.Item>
							</ListGroup>
							// </Link>
						)}
					</Card>
			)}



	</Container>
  )
}

export default AFilmPage
