import React from "react"

const Smurf = ({ smurf, deleteSmurf, updateSmurf }) => {
  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
      <button onClick={() => updateSmurf(smurf.id)}>Update</button>
    </div>
  )
}

export default Smurf