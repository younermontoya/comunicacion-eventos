import React from 'react'

export const Person = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
  <img src={props.img} className="card-img-top" alt={props.name} />
  <div className="card-body">
    <h5 className="card-title"> {props.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted"> {props.rol}</h6>
    <p className="card-text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi?
    </p>
  </div>
</div>

  )
}
