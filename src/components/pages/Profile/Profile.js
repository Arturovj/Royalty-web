import React from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'

const Profile = () => {

    const { user } = useAuthContext()


    console.log(user)


  return (
      <>
    <div className='Profile'>
        <h1>PROFILE</h1>
    <p>{JSON.stringify(user)}</p>
    </div>

    


    </>

  )
}

export default Profile