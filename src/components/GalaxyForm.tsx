import React, { useState } from 'react'

//bootstrap
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

interface GalaxyFormProps {
	onSearchGalaxy: (galaxySearch: string) => void;
}

const GalaxyForm: React.FC<GalaxyFormProps> = ({ onSearchGalaxy }) => {
	const [galaxyInput, setGalaxyInput] = useState("")

	const handleGalaxySumbit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearchGalaxy(galaxyInput)
	}

	return (
		<Container className='col-lg-6 col-sm-12 mb-5'>
			<Form onSubmit={handleGalaxySumbit}>
				<InputGroup>
					<Form.Control
						id="galaxy-search"
						name="galaxy-search"
						placeholder="Search, you must!"
						aria-label="Search the galaxy"
						aria-describedby="basic-galaxy-search"
						type="text"
						value={galaxyInput}
						required
						onChange={e => setGalaxyInput(e.target.value)}
					/>

					<Button variant="btn btn-warning">
						BB-Search now!
					</Button>
				</InputGroup>
	 		 </Form>
	  	</Container>
	)
}

export default GalaxyForm
