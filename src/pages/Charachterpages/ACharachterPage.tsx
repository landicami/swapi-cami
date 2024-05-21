import React from 'react'
import { useParams } from 'react-router-dom'

const ACharachterPage = () => {
	const { id } = useParams();
	const charachterId = Number(id);
	console.log(charachterId);
  return (
	<div>ACharachterPage with {charachterId}</div>
  )
}

export default ACharachterPage
