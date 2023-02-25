import { formatEther } from "ethers"
import alchemy from "../helpers/alchemy"

export const getEthBalance = async (address: string, network = "ETH_GOERLI") => {
  const balance = await alchemy.core.getBalance(address)
  return formatEther(balance.toString())
}
