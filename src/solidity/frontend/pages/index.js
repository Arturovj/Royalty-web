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
        <button className="button-mint-jvliah" style={{ cursor:'pointer'}} onClick={() => Mint()}><i class="fas fa-dice-d6"></i></button>
        
        </div>
        
        <div className="card dualipa animated">
        <button className="button-mint-dualipa"style={{ cursor:'pointer'}} onClick={() => Mint()}><i class="fas fa-dice-d6"></i></button>
       
          </div>

          <div className="card marshmello animated">
        <button className="button-mint-marshmello" style={{ cursor:'pointer'}} onClick={() => Mint()}><i class="fas fa-dice-d6"></i></button>
      
          </div>  
        
        {/* <div className="mint-button">
        <button className="button-mint-jvliah" onClick={() => Mint()}>MINT </button>
        </div>
        <div className="mint-button">
        <button className="button-mint-dualipa" onClick={() => Mint()}>MINT </button>
        </div> */}
        
      </div>
      <div className="specs-jvliah" style={{ color: 'white'}}><p>-TIER LIST</p>
     <lu>
     <h2>
     <li>
       
       Click on 
           <i class="fas fa-dice-d6 fa-fw"></i>
           to Mint
          
       </li>
       </h2>
       <li>
          VIP for every Show
       </li>
       <li>
          WhiteList
       </li>
       <li>
          Remix Challenges
       </li>
      
       </lu> 
       
      </div>

      <ModalAppNft/>

     
      
    </>
  );
};

export default MintNft;
