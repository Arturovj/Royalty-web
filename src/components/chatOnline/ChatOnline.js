import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./chatOnline.css"

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
const [friends, setFriends] = useState([])
const [onlineFriends, setOnlineFriends] = useState ([])

useEffect(() => {

    const getFriends = async () => {
      const res = await axios.get("http://localhost:3001/api/users/friends/" +currentId);
      setFriends(res.data)
    };

    getFriends();
},[currentId])
  
  console.log(friends)
  return (
    <div className='chatOnline'>
        <div className='chatOnlineFriend'>
            <div className='chatOnlineImgContainer'>
                <img className='chatOnlineImg'
                src='https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/d/9/d/2d9d9708f2b58900e511693d00fb67c1.jpg'
                alt=''
                />
                <div className='chatOnlineBadge'></div>
            </div>
            <span className='chatOnlineName'>John Doe</span>
        </div>
    </div>
  )
}
