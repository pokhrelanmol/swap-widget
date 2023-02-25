import { Alchemy, Network, Utils } from "alchemy-sdk"

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

async function getAllContractNFTs() {
  // NFT contract address
  const address = import.meta.env.VITE_CONTRACT_ADDRESS

  // Keep this as false so you get all the needed metadata!
  const omitMetadata = false

  // Get all NFTs and store in array
  const { nfts } = await alchemy.nft.getNftsForContract(address, {
    omitMetadata: omitMetadata,
  })

  console.log(nfts)

  for (let nft of nfts) {
    // for now, let's log just the NFT image location!
    // console.log(`${nft}. ${nft.rawMetadata.image}`)
    // nft++
    console.log(nft)
  }
}

export default getAllContractNFTs
