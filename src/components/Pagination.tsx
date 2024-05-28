import React from 'react'
import Button from "react-bootstrap/Button";
import { CharactherResponse } from '../service/charService/swAPI.chartypes'
import { FilmResponse } from '../service/filmService/swAPI.filmTypes';

interface PaginationProps{
	hasNextPage: boolean
	hasPreviousPage: boolean;

	data: CharactherResponse | FilmResponse;
	onNextPage: () => void;
	onPreviousPage: () => void;

}

const Pagination: React.FC<PaginationProps> = ({
	data,
	hasPreviousPage,
	hasNextPage,
	onNextPage,
	onPreviousPage
	}) => {
  return (

		<div className='row'>
			<div className='d-flex justify-content-around'>
				<div>
				<Button
				variant="warning"
				onClick={onPreviousPage}
				disabled={!hasPreviousPage}
				>
					&laquo; Previous
				</Button>
				</div>
				<div className='bg-dark mb-0 p-2 rounded'>
					<p className='m-0 font-starwars'>
						{data.current_page} of {data.last_page}
					</p>
				</div>
				<div>
					<Button
					variant="warning"
					onClick={onNextPage}
					disabled={!hasNextPage}
					>
					Next &raquo;</Button>
				</div>
			</div>
		</div>

  )
}

export default Pagination;
