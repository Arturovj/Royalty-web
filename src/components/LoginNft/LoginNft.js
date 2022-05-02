import React, { useState, useEffect } from 'react'
import './LoginNft.css'

export default function LoginNft(props) {
    const [isConnecting, setIsConnecting] = useState(false);
    const [provider, setProvider] = useState(window.ethereum);
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  
    useEffect(() => {
      setProvider(detectProvider());
    }, []);
  
    useEffect(() => {
      if (provider) {
        if (provider !== window.ethereum) {
          console.error(
            "Not window.ethereum provider.  Do you have multiple wallets installed ?"
          );
        }
        setIsMetaMaskInstalled(true);
      }
    }, [provider]);
  
    const detectProvider = () => {
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else {
        console.warn("No Ethereum browser detected! Check out MetaMask");
      }
      return provider;
    };
  
    const onLoginHandler = async () => {
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(false);
      props.onLogin(provider);
    };

  return (
      <>
      <div className='login-nft'>LoginNft</div>
      <div className='login-nft'>
          {isMetaMaskInstalled && ( 
      <button  onClick={onLoginHandler}>
          {!isConnecting && "Connect Metamask"}
          {isConnecting && "Loading"}
      </button>
          )}
          {!isMetaMaskInstalled && ( 

              <p>
                  <a href="">Install Metamask</a>
              </p>
          )}

      </div>
      </>
  )
}
