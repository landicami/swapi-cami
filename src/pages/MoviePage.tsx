import React, { useEffect, useState } from 'react'
import { getMovies } from '../service/filmService/swAPI.films';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  Container  from 'react-bootstrap/Container';
import { FilmResponse } from '../service/filmService/swAPI.filmTypes';
import { Link } from 'react-router-dom';

const MoviePage = () => {
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
    <Container>

    	<h1 className='font-starwars'>MoviePage</h1>

		{error && (
			<Container className='bg-dark'>
				<p className='font-starwars'>{error}</p>
			</Container>
			)}

		<Container className='bg-dark row rounded'>
				{films && films.data.length > 0 && (

					<>
					 {films.data.map(film =>
					 <div key={film.id} className='col-12 col-md-6 col-lg-6 mb-3 mt-3'>
					<Card>
      					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
     						<Card.Body>
								<Card.Title>{film.title}</Card.Title>
								<Card.Text>
								Producer: {film.producer} <br/>
								Director: {film.director}
								</Card.Text>

							<Link to="/" className='btn btn-primary' role='button'>{film.title}</Link>
      						</Card.Body>
   					 </Card>
					 </div>
					)}
					</>
				)
				}
		</Container>
    </Container>
  )
}

export default MoviePage
