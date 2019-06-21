import React from "react"

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </div>
  )
}

export default Smurf