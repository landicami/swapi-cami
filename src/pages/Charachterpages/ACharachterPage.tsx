import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getACharachter } from '../../service/charService/swAPI.char';
import { ACharachterResponse } from '../../service/charService/swAPI.chartypes';
import Container from 'react-bootstrap/Container';
import ACharachterCard from '../../components/CharachterComponents/ACharachterCard';

const ACharachterPage = () => {
	const [charachter, setCharachter] = useState<ACharachterResponse | null>(null)
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	const charachterId = Number(id);

	const getOneCharachterfromAPI = async (charachterId: number) => {
		setIsLoading(true)

		try {
			const data = await getACharachter(charachterId);
			setCharachter(data);
		}catch (err){
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("ERROR for all what it's worth");
			}
		}
		setIsLoading(false)
	}

	useEffect(()=> {
		getOneCharachterfromAPI(charachterId)
	}, [charachterId]);

  return (
	<Container>

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

			{charachter && <ACharachterCard data={charachter} />}

			<Link to={"/people"} className='btn btn-warning mt-4 me-2' role='button'>Back to all charachters</Link>

	</Container>

  )
}

export default ACharachterPage
