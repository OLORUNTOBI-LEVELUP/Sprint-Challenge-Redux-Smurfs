import React from "react"

const Smurf = ({ smurf, deleteSmurf }) => {
  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
    </div>
  )
}

export default Smurf