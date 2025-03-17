import React from 'react'
import { Outlet } from 'react-router'

const JobsLayout = () => {
	return (
		<div>
			<h1>Job Openings</h1>
			<p>Check out our job openings below!</p>
			<Outlet />
		</div>
	)
}

export default JobsLayout