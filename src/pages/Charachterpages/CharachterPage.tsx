import { useEffect, useState } from 'react'
import { CharactherResponse } from '../../service/charService/swAPI.chartypes'
import { getAllPeople, searchACharachter } from '../../service/charService/swAPI.char';

//Bootstrap
import Button from "react-bootstrap/Button";
import  Container  from 'react-bootstrap/Container';
import GalaxyForm from '../../components/GalaxyForm';
import CharachterCardInfo from '../../components/CharachterComponents/CharachterCardInfo';

import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const CharachterPage = () => {
	const [ people, setPeople ] = useState<CharactherResponse | null>(null);
	const [ error, setError ] = useState<string | false>(false)
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");


	const getCharachters = async (page: number = 1) => {
		setPage(1);
		setSearchQuery("");
		setIsLoading(true);
		setPeople(null);
		try {
			const data = await getAllPeople(page);
			setPeople(data);
		} catch (err) {
			if (err instanceof Error){
				setError(err.message)
			} else {
				setError("NOPE NOPE AND ANOTHER NOPE")
			}
		}
		setIsLoading(false);

	}
	const searchGalaxyCharachter = async (galaxySearch: string = "") => {
        setPage(1); // Sätt sidan till 1 endast vid en ny sökning
        setSearchQuery(galaxySearch);
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = searchQuery
                ? await searchACharachter(searchQuery, page)
                : await getAllPeople(page);
            setPeople(data);
            setError(false);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Wrong something went, galaxy wrong it was!");
            }
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [page, searchQuery]);


  return (
	<Container className='row'>

		<h1 className='font-starwars mt-2'>Charachters</h1>

		<GalaxyForm
		onSearchGalaxy={searchGalaxyCharachter}
		/>

		{/* <Pagination
		data={people}
		getAllRecources={getAllCharachters}
		/> */}

		{/* { people && (
		<div className='row'>
			<div className='d-flex justify-content-around'>
				<div>
				<Button
				variant="warning"
				onClick={() => {people.prev_page_url && getCharachters(people.prev_page_url)}}
				disabled={people.prev_page_url === null}
				>
					&laquo; Previous</Button>
				</div>
				<div className='bg-dark mb-0 p-2 rounded'>
					<p className='m-0 font-starwars'>
						{people.current_page} of {people.last_page}
					</p>
				</div>
				<div>
					<Button
					variant="warning"
					onClick={() => {people.next_page_url && getCharachters(people.next_page_url)}}
					disabled={people.next_page_url === null}
					>
					Next &raquo;</Button>
				</div>
			</div>
		</div>
		)} */}


{ people && (
		<div className='row'>
			<div className='d-flex justify-content-around'>
				<div>
				<Button
				variant="warning"
				onClick={() => {setPage(prevValue => prevValue -1)}}
				disabled={people.prev_page_url === null}
				>
					&laquo; Previous</Button>
				</div>
				<div className='bg-dark mb-0 p-2 rounded'>
					<p className='m-0 font-starwars'>
						{people.current_page} of {people.last_page}
					</p>
				</div>
				<div>
					<Button
					variant="warning"
					onClick={() => {setPage(prevValue => prevValue + 1)}}
					disabled={people.next_page_url === null}
					>
					Next &raquo;</Button>
				</div>
			</div>
		</div>
		)}

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


			<CharachterCardInfo
				data={people} />



		<div>
			<Link to={"/people"} className='btn btn-warning mt-4' role='button' onClick={() => getCharachters(page)}>Get all charachters</Link>
		</div>

	</Container>
)
}


export default CharachterPage
