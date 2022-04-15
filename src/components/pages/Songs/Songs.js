import React from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'

const Songs = () => {
    const { user } = useAuthContext()


    console.log(user)


  return (
      <>
    <div className='Songs'>
        <h1>Songs</h1>
    <p>{JSON.stringify(user)}</p>
    </div>

    


    </>)
}

export default Songs