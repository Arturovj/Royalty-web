import React from 'react'
import { format } from "timeago.js"
import "./Message.css"

export default function Message({ message, own, photo }) {
  return (
    <div className={ own ? "message own" : "message"}>
        <div className='messageTop'>
            <img
            className='messageImg'
            src={photo}
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
