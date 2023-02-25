import { Utils } from "alchemy-sdk"
import alchemy from "../api/helpers/alchemy"
import abi from "../api/abi.json"

const CONTRACTABI = abi
const INTERFACE = new Utils.Interface(CONTRACTABI)
const TOPIC = INTERFACE.encodeFilterTopics("TradeWithdrawn", [])

export default async function getWithdrawnTrades() {
  const logs = await alchemy.core.getLogs({
    fromBlock: "0x0",
    toBlock: "latest",
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
    topics: TOPIC,
  })

  return logs
}
