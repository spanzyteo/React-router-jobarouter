import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          id dolore odio doloribus accusantium, nihil modi quis laudantium natus
          voluptas recusandae, expedita minus rerum vero sed, quidem molestias?
          Nisi, repellat?
        </p>
      </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const resp = await fetch('http://localhost:4000/careers/' + id)
  if (!resp.ok) {
    throw Error('Could not find that career')
  }

  return resp.json()
}
