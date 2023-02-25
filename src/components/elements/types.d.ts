export interface InputProps {
    value?: string | number;
    onChange?: (value: ChangeEventHandler<HTMLInputElement>) => void;
    className?: string;
    id?: string;
    placeholder?: string;
    children?: React.ReactNode;
    type?: string;
    label?: string;
    name?: string;
    error?: string;
    onError?: (error: string) => void;
}

export interface SearchBarProps {}

export interface SearchBarState {
    value: string;
    error: string;
}

export interface TokenInputProps {
    tokenName: string;
    tokenImage: string;
    tokenSymbol?: string;
    selected?: boolean;
    tokenAddress: string;
    type?: "from" | "to";
    setTokenData?: (tokenData: TokenData) => void;
}
