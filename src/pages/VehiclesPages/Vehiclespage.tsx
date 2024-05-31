import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

//Bootstrap
import  Container  from 'react-bootstrap/Container';

//Api stuff
import { VehicleResponse } from '../../service/vehicleService/swAPI.vehiclesTypes';
import { getVehicles, searchAVehicle } from '../../service/vehicleService/swAPI.vehicles';

//Components
import GalaxyForm from '../../components/GalaxyForm';
import Pagination from '../../components/Pagination';
import VehiclesCardInfo from '../../components/VehiclesComponents/VehiclesCardInfo';


const Vehiclespage = () => {
	const [vehicles, setVehicles] = useState<VehicleResponse | null>(null);
	const [error, setError] = useState<string | false>(false);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamsQuery = searchParams.get("query");
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchGalaxyVehicles = async ( galaxySearch: string) => {
		setSearchParams({query: galaxySearch.trim(), page: "1"})
	}

	const getVehiclesData = async () => {
		setIsLoading(true)
		try {
			const data = searchParamsQuery
			? await searchAVehicle(searchParamsQuery, pageParams)
			: await getVehicles(pageParams)
			setVehicles(data);
			setIsLoading(false)

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
		setSearchParams({ query: "", page: "1"});
	}

	useEffect(()=> {
		getVehiclesData();
	}, [pageParams, searchParamsQuery])

  return (
    <>

    	<h1 className='font-starwars'>Vehicles</h1>
		<GalaxyForm
		onSearchGalaxy={searchGalaxyVehicles}
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

		{vehicles && <Pagination
		page={pageParams}
		totalPages={vehicles.last_page}
		hasNextPage={pageParams < vehicles.last_page}
		hasPreviousPage={pageParams < vehicles.from}
		onNextPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams + 1).toString() })}
		onPreviousPage={() => setSearchParams({ query: searchParamsQuery || "", page: (pageParams - 1).toString() })}
		/>}

		{vehicles &&
			<p className='font-starwars mt-3'>{vehicles.total} vehicles, {vehicles.per_page} vehicles max per page</p>
		}

		{searchParamsQuery &&
			<p className='font-starwars'>You searched for "{searchParamsQuery}"</p>
		}

		<VehiclesCardInfo
		data={vehicles}
		/ >

		<Link to={"/vehicles"} className='btn btn-warning mt-4' role='button' onClick={execute}>Get all vehicles</Link>
    </>
  )
}

export default Vehiclespage
