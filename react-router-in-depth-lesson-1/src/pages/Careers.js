import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function () {
  const careers = useLoaderData()
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.title}</p>
        </Link>
      ))}
    </div>
  )
}
export const careersLoader = async () => {
  const resp = await fetch('http://localhost:4000/careers')

  if (!resp.ok) {
    throw Error('Could not fetch the careers')
  }

  return resp.json()
}
