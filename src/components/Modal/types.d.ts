export interface ModalProps {
  isOpen: boolean
  setIsOpen: (prev: boolean) => void
  onDismiss?: () => void
  maxHeight?: string
  minHeight?: string
  initialFocusRef?: React.RefObject<HTMLElement>
  finalFocusRef?: React.RefObject<HTMLElement>
  children: React.ReactNode
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  headerClassName?: string
  footerClassName?: string
}
