import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { CharactherResponse } from '../../service/charService/swAPI.chartypes';

interface CharachterCardInfoProps {
data: CharactherResponse | null;
}

const CharachterCardInfo: React.FC<CharachterCardInfoProps> = ({data}) => {
  return (
	<Container className='row rounded'>

				{data && data.data.length > 0 ? (

					<>
					<div className='col-12 mb-3 mt-3'>
					<div className='col-12 mb-3 mt-3'>
					<p className='font-starwars'>Showing {data.total} charachters, {data.per_page} charachers per page</p>
				</div>

				</div>
					 {data.data.map(charachter =>

					 <Container key={charachter.id} className='col-12 col-md-6 col-lg-4 mb-3 mt-3 '>
						<Card className='border border-warning'>
						<Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  							<Card.Img
  							  variant="top"
  							  src={charachter.image_url}
  							  style={{
  							    width: '20vh',
  							    height: '20vh',
  							    objectFit: 'cover',
  							    borderRadius: '50%'
  							  }}
  							/>
							</Card.Body>

								<Card.Body>
								<div className='d-flex flex-column align-items-center'>
									<h5 className='font-starwars'>{charachter.name}</h5>
								</div>

								<Card.Text className='mt-2'>
							  		Born: {charachter.birth_year} <br/>
									In {charachter.films_count} movies.
								</Card.Text>
								</Card.Body>

								<div className='col-md-8 col-sm-8 mb-2'>
									<Link to={`/people/${charachter.id}`} className='link-starwars ps-3'>Read more &raquo;</Link>
								</div>



						</Card>
					 </Container>
					)}
					</>
				)
				:
				(
					<Container className='bg-dark mt-2 p-2 rounded'>
						<p className='font-starwars'>Try another search</p>
					</Container>
				)
				}
  </Container>
  )
}

export default CharachterCardInfo
