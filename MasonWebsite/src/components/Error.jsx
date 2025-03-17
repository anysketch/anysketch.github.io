import React from 'react'
import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Error = () => {

	const error = useRouteError()
	const nav = useNavigate()

	return (
		<div className='job-details'>
			<h3>An error occured</h3>
			<p>{error.message}</p>
			<button onClick={() => nav('/')}>Go to homepage</button>
		</div>
	)
}

export default Error