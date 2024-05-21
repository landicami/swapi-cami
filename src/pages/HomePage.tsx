import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center centered-container m-4 background'>
        <div className='bg-dark col-10 text-center p-3 border border-warning rounded'>
            <h1 className="font-starwars">Beep Boop!</h1>
            <h2 className="font-starwars">You have been requested to search the galaxy for stuff.</h2>
			<h3 className="font-starwars"> Let's do it!</h3>
			<Link to="/films" className='btn btn-warning me-2' role='button'>Search for films</Link>
			<Link to="/charachters" className='btn btn-warning' role='button'>Search for charachters</Link>


        </div>
    </div>
  )
}

export default HomePage
