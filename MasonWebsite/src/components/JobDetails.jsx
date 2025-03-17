import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

	const jobDetails = useLoaderData()

	return (
		<div className='job-details'>
			<p><b>Job Title: </b> {jobDetails.title} </p>
			<p><b>Location: </b> {jobDetails.location} </p>
			<p><b>Salary: </b> {jobDetails.salary} </p>
			<p><b>Description: </b> {jobDetails.desc} </p>
			<button>Apply Now</button>
		</div>
	)
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
	const {id} = params
	const response = await fetch("http://localhost:5000/jobs/" + id)
	if (!response.ok) {
		throw new Error("Job not found")
	}
	return response.json()
}