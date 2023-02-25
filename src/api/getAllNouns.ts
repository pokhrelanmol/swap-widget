import { Alchemy, Network, Utils } from "alchemy-sdk"
import abi from "./abi.json"

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

const CONTRACt_ADDRESS = "0x250Dab09217A07eCFE2d00aC4F8943A29A45F3b4"
const CONTRACTABI = abi

const INTERFACE = new Utils.Interface(CONTRACTABI)
const TradeExpired = INTERFACE.encodeFilterTopics("TradeConfirmed", [])

async function getAllNounsDaoProposalsEver() {
  const logs = await alchemy.core.getLogs({
    fromBlock: "0x0",
    toBlock: "latest",
    address: CONTRACt_ADDRESS,
    topics: TradeExpired,
  })

  console.log(logs)
}

export default getAllNounsDaoProposalsEver
