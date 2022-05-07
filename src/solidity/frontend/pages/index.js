import React from "react";
import { useWeb3React } from "@web3-react/core";
import useRoyaltys from "../hooks/useRoyaltys";
import "./index.scss";
import toast from "react-hot-toast";
import ModalAppNft from "../../../components/ModalNft/ModalApps";

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
    <div className="modal-nft-button">
  
    </div>
      <div className="song-nft-container">
      
        <div className="card jvliah animated">
        <button className="button-mint-jvliah" onClick={() => Mint()}>MINT </button>
        </div>
        <div className="card dualipa animated">
        <button className="button-mint-dualipa" onClick={() => Mint()}>MINT </button>
          </div>
        
        {/* <div className="mint-button">
        <button className="button-mint-jvliah" onClick={() => Mint()}>MINT </button>
        </div>
        <div className="mint-button">
        <button className="button-mint-dualipa" onClick={() => Mint()}>MINT </button>
        </div> */}
        
      </div>
      <ModalAppNft/>
      
    </>
  );
};

export default MintNft;
