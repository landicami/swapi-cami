import Container from 'react-bootstrap/Container'

const NotFoundpage = () => {
  return (
	<Container>
		<div className='d-flex justify-content-center align-items-center vh-100'>
			<div className='text-center font-starwars'>
				<h1>🛑 Not exists, does page. 🛑 <br /></h1>
				<h2>Try, you will. Fail, will you?</h2>
			</div>
		</div>
	</Container>
  )
}

export default NotFoundpage
