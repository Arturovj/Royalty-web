import React from 'react'
import "./chatOnline.css"

export default function ChatOnline() {
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
