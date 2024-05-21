import { Link } from 'react-router-dom'


const BacktoFilmBtn = () => {
  return (
	<Link to={"/films"} className='btn btn-warning mt-4' role='button'>Back to films</Link>

  )
}

export default BacktoFilmBtn
