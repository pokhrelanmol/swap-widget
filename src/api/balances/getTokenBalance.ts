// Internal ETH transfers
// External ETH transfers
// ERC-721 transfers
// ERC-1155 transfers
// ERC-20 transfers
// Special NFT transfers
import alchemy from "../helpers/alchemy"
import { AssetTransfersCategory } from "alchemy-sdk"

export const getTokenBalance = async (address: string, network = "ETH_GOERLI") => {
  const transfers = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    toBlock: "latest",
    toAddress: address,
    excludeZeroValue: true,
    category: [AssetTransfersCategory.ERC20],
  })

  return transfers
}
