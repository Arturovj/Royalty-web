import React from "react";
import { useWeb3React } from "@web3-react/core";
import useRoyaltys from "../hooks/useRoyaltys";
import "./index.scss";
import toast from "react-hot-toast";

const MintNft = () => {
  const royaltys = useRoyaltys();
  const { active, account } = useWeb3React();
  const Mint = () => {
    console.log(royaltys);
    const upc = royaltys.methods
      .mint()
      .send({
        from: account,
      })
      .on("transactionHash", (txHash) => {
        toast.success(`Minting your Nft song... Transaction:${txHash}`);
      })
      .on("receipt", () => {
        toast.success(`Your Nft Song has been Minted`);
      })
      .on("error", (error) => {
        toast(`An ${error.message} ocurred`);
      });
  };

  return (
    <>
      <div className="song-nft-container">
        <div className="card jvliah animated"></div>
        <div className="mint-button">
        <button onClick={() => Mint()}>Mintear NFT</button>
        </div>
        
      </div>
    </>
  );
};

export default MintNft;
