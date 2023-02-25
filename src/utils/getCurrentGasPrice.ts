// export default function getCurrentGasPrice() {
//   return new Promise((resolve, reject) => {
//     fetch("https://ethgasstation.info/json/ethgasAPI.json")
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }

import { Alchemy, Network, Utils } from "alchemy-sdk"
import alchemy from "../api/helpers/alchemy"

export default async function getCurrentGasPrice() {
  const currentGasInHex = await alchemy.core.getGasPrice()
  console.log(currentGasInHex)
  const currentGasInDecimal = Utils.formatUnits(currentGasInHex, "gwei")
  console.log(currentGasInDecimal)
  return currentGasInDecimal
}
