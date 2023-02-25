export interface InputProps {
  value?: string
  onChange?: (value: ChangeEventHandler<HTMLInputElement>) => void
  className?: string
  id?: string
  placeholder?: string
  children?: React.ReactNode
  type?: string
  label?: string
  name?: string
  error?: string
  autocomplete?: string
  onError?: (error: string) => void
}

export interface SearchBarProps {}

export interface SearchBarState {
  value: string
  error: string
}

export interface TokenInputProps {
  tokenName: string
  tokenImage: string
  tokenSymbol?: string
  selected?: boolean
  type?: "from" | "to"
  setTokenData?: (tokenData: TokenData) => void
}
