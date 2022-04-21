import React from 'react'
import { format } from "timeago.js"
import "./Message.css"

export default function Message({ message, own }) {
  return (
    <div className={ own ? "message own" : "message"}>
        <div className='messageTop'>
            <img
            className='messageImg'
            src='https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/d/9/d/2d9d9708f2b58900e511693d00fb67c1.jpg'
            alt=''
            >
            </img>
            <p className='messageText'>
                {message.text}
            </p>
        </div>
        <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  )
}
