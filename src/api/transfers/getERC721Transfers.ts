import alchemy from "../helpers/alchemy"
import { AssetTransfersCategory } from "alchemy-sdk"

const getERC721Transfers = async (address: string, network = "ETH_GEORLI") => {
  const transfers = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    toBlock: "latest",
    toAddress: address,
    excludeZeroValue: true,
    category: [AssetTransfersCategory.ERC721],
  })

  return transfers
}

export default getERC721Transfers
