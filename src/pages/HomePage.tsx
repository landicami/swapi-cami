import { Link } from "react-router-dom";
import  Dropdown  from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const HomePage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center m-4'>
        <div className='bg-dark col-10 text-center p-3 border border-warning rounded'>
            <h1 className="font-starwars">Beep Boop!</h1>
            <h2 className="font-starwars">You have been requested to search the galaxy for stuff.</h2>
			<h3 className="font-starwars"> Let's do it!</h3>

			<DropdownButton id="dropdown-basic-button" title="Choose search" variant="warning">
				<Dropdown.Item as={Link} to="/films">Search for films</Dropdown.Item>
				<Dropdown.Item as={Link} to="/people">Search for characters</Dropdown.Item>
				<Dropdown.Item as={Link} to="/planets">Search for planets</Dropdown.Item>
				<Dropdown.Item as={Link} to="/species">Search for species</Dropdown.Item>
				<Dropdown.Item as={Link} to="/vehicles">Search for vehicles</Dropdown.Item>
   			 </DropdownButton>


        </div>
    </div>
  )
}

export default HomePage
