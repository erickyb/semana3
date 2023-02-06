import React from 'react'

const ResidentForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id='idLocation' placeholder='type a location id' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default ResidentForm
