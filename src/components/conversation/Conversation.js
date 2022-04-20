import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './conversation.css'

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    
    const friendId = conversation.members.find(m=>m !== currentUser._id)

    const getUser = async () => {
      try{
        const res = await axios("http://localhost:3001/api/users/" + friendId)
        setUser(res.data)
      } catch(err){
        console.log(err)
      }
    };
    getUser()
  },[currentUser, conversation])

  return (
    <>
    <div className='conversation'>
      <img
      className='conversationImg'
      src={user?.avatar}
      >
      </img>
      <span className='conversationName'>{user?.name}</span>

    </div>
    
    </>
  )
}
