
import React, { useState } from "react";
import HomeNft from "../HomeNft/HomeNft";
import LoginNft from "../LoginNft/LoginNft";
import "./Nft.css"

export default function Nft() {


  const [isConnected, setIsConnected] = useState(false)

  const onLogin = () => {
    setIsConnected(true)
  }

  const onLogout = () => {
    setIsConnected(false);
  }

  return (
    <>
      <div className="nft-container">
        <h1 className="nft-title">WEB3</h1>

          <div>
              {!isConnected && <LoginNft onLogin={onLogin} onLogout={onLogout}/>}
          </div>

          <div>
              {isConnected && <HomeNft/>}
          </div>


      </div>
    </>
  );
}
