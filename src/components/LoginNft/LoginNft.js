import React, { useState, useEffect, useCallback } from 'react';
import { connector } from './connector';
import './LoginNft.css';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import useTruncatedAddress from '../../solidity/frontend/hooks/useTruncatedAddress';
import toast from "react-hot-toast";

export default function LoginNft (props) {
  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } =
    useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    console.log('connect');
    activate(connector);
    window.localStorage.setItem('previouslyConnected', 'true');
  }, [activate]);

  const disconnect = () => {
    deactivate();
    window.localStorage.removeItem('previouslyConnected');
  };


  const handleClick = () => {
    if (!active){ connect(toast.success(`Connected Metamask`)) 
    } 
    else {
      disconnect(toast.success(`Disconnected Metamask`))
    }
  }

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    if (window.localStorage.getItem('previouslyConnected') === 'true') connect();
  }, [connect]);
  const truncatedAddress = useTruncatedAddress(account);

  return (
    <>
      <div className='login-nft'>LoginNft</div>
      <div className='login-nft'>
        {active && <span>{truncatedAddress}</span>}
        <button
          onClick={handleClick}
          
        > 
          {active ? 'Disconnect' : 'Connect'}
        </button>

      </div>
    </>
  );
} 
