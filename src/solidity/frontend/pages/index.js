import React from 'react';
import { useWeb3React } from '@web3-react/core';
import useRoyaltys from '../hooks/useRoyaltys';

const MintNft = () => {
  const royaltys = useRoyaltys();
  const { active, account } = useWeb3React();
  const Mint = () => {
    console.log(royaltys);
    const upc = royaltys.methods.mint().send({
      from: account
    });
  };

  return (
    <>
      <button onClick={() => Mint()}>Mintear NFT</button>
    </>
  );
};

export default MintNft
;