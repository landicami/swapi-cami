import React from 'react'
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center centered-container m-4'>
        <div className='col-10 text-center'>
            <h1 className="font-starwars">Home is where your heart is</h1>
            <p className="font-starwars">You have been requested to search the galaxy for stuff. Let's do it!</p>
            <Button variant="outline-warning">Search</Button>
        </div>
    </div>
  )
}

export default HomePage