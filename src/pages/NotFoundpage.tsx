import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'


const NotFoundpage = () => {
	const navigate = useNavigate();
  return (
	<Container>
		<div className='d-flex justify-content-center align-items-center vh-100'>
			<div className='text-center'>
				<h1 className=" font-starwars">🛑 Not exists, does page. 🛑 <br /></h1>
				<h2 className=" font-starwars">Try, you will again. Fail, will you?</h2>
					<Button  className="mt-2" variant="warning" onClick={() => navigate(-1)}>
						Wanna go back?
					</Button>
			</div>

		</div>
	</Container>
  )
}

export default NotFoundpage
