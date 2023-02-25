import { Alchemy, Network, Utils } from "alchemy-sdk"
import alchemy from "../api/helpers/alchemy"
// export default async function getEstimatedGasOfTx() {
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

export default async function getEstimatedGasOfTx() {
  const estimatedGasInHex = await alchemy.core.estimateGas({
    from: "0x04E1B236182b9703535ecB490697b79B45453Ba1",
    to: "0x7bE129dc9F7715f51D459c36bB127Cc2FaE98B32",
    data: "0xd0e30db0",
    value: Utils.parseEther("0.1"),
  })

  const estimatedGasInDecimal = Utils.formatUnits(estimatedGasInHex, "gwei")
  console.log(estimatedGasInDecimal, "estimatedGasInDecimal in gwei")
}
