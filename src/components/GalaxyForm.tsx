import React, { useState } from 'react'
import { searchAMovie } from '../service/filmService/swAPI.films';

//bootstrap
import Button from "react-bootstrap/Button";
import  Container  from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

interface GalaxyFormProps {
	onSearchGalaxy: (galaxySearch: string) => void;

}
const GalaxyForm: React.FC<GalaxyFormProps> = ({onSearchGalaxy}) => {
const [galaxyInput, setGalaxyInput] = useState("")




  const handleGalaxySumbit = (e: React.FormEvent) => {
	e.preventDefault();
	console.log("Searching for", galaxyInput)
	onSearchGalaxy(galaxyInput)


  }
  return (
		<Container className='col-lg-6 col-sm-12'>
			<Form onSubmit={handleGalaxySumbit}>
				<InputGroup className="mb-3">
					<Form.Control
					placeholder="Search, you must!"
					aria-label="Search the galaxy"
					aria-describedby="basic-galaxy-search"
					type="text"
					value={galaxyInput}
					required
					onChange={e => setGalaxyInput(e.target.value)}

					/>

				<Button variant="btn btn-warning">
				BB-8 now!
				</Button>
			</InputGroup>
	 		 </Form>
	  	</Container>  )
}

export default GalaxyForm
