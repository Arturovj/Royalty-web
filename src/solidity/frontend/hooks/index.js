import { useWeb3react } from '@web3-react/core'
import royaltysArtifacts from '../../backend/config/artifacts/royaltys'
const { address, abi } = royaltysArtifacts

const useRoyaltys = () => {
    const { active, library, chainId } = useWeb3react
}
