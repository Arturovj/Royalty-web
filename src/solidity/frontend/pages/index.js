import { useWeb3React } from '@web3-react/core';
import useRoyaltys from '../hooks/useRoyaltys'

const MintNft = () => {

    const royaltys = useRoyaltys();

    const Mint = () => {
        const { active, account } = useWeb3React();
        const upc = royaltys.methods.mint().send({
          from: account
        });
      }
      ;

      console.log(Mint)
    return(
        <>
    <button onClick={Mint}>MINT</button>
        </>
    )


}

export default MintNft