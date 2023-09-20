import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas facilis
        consectetur corporis distinctio architecto. Voluptatibus at eius sequi
        fuga voluptatum qui, quis nihil officiis illum. Illum quisquam
        voluptatum vero libero!
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  )
}
