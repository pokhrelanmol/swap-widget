export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
  children?: React.ReactNode
  type?: string
  label?: string
  onError?: (error: string) => void
}
