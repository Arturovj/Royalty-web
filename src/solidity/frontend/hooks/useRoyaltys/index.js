import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import royaltysArtifacts from '../../../backend/config/artifacts/royaltys';
const { address, abi } = royaltysArtifacts;

const useRoyaltys = () => {
  const { active, library, chainId } = useWeb3React();
  const royaltys = useMemo(() => {
    if (active) {
      return new library.eth.Contract(abi, address[chainId]);
    }
  }, [active, library?.eth?.Contract, chainId]);
  return royaltys;
};

export default useRoyaltys;