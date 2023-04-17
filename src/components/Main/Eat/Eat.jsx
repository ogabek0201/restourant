import React from 'react'
import './Eat.css'

const Eat = ({img,h,p}) => {
  return (
    <div className='block'>
        <img src={img} alt="" className='b-img' />
        <div className="col">
        <h3>{h}</h3>
        <p>{p}</p>
        </div>

    </div>
  )
}

export default Eat