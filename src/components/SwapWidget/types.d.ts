export interface WidgetProps {
  children?: React.ReactNode
}

export interface TokenData {
  chainId?: number
  address?: string
  name?: string
  symbol?: string
  decimals?: number
  logoURI?: string
  extensions?: {
    bridgeInfo?: {
      "137": {
        tokenAddress?: string
      }
      "42161": {
        tokenAddress?: string
      }
      "10"?: undefined
      "42220"?: undefined
      "1"?: undefined
    }
  }
}
