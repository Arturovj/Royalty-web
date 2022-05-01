import React from 'react'

export default function LoginNft(props) {

 const onLoginHandler = () => {
     props.onLogin()
 };

  return (
      <>
      <div>LoginNft</div>
      <button onClick={onLoginHandler}>Connect Metamask</button>
      </>
  )
}
