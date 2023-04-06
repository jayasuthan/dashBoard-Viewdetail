import React from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate()
  const navi = () => {
       navigate('/dashboard')
  }



  return (
    <div>

       <h1> Edit your data here </h1>

       <button onClick={navi}>Back to DashBoard</button>


    </div>
  )
}

export default Edit