export interface WidgetProps {
    children?: React.ReactNode;
}

export interface TokenData {
    chainId?: number;
    address: string;
    amount?: number;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
}
