import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  const [user, setUser] = useState('mario')

  if (!user) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        maiores eius officiis inventore, beatae magnam rem! Accusantium nobis
        fuga corrupti reprehenderit aut deserunt itaque in iusto. Ab nam minus
        consequatur!~
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dicta,
        eaque ipsam nisi ullam non voluptas earum quisquam ab quam minus, odit
        aliquam incidunt natus. Cum ducimus sunt dignissimos excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptas cum alias. Temporibus necessitatibus aut, maxime ut hic laborum
        ipsa suscipit esse enim, deleniti ex, quos dicta repellendus quod
        tempore.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
