export interface WidgetProps {
    children?: React.ReactNode;
}

export interface TokenData {
    chainId?: number;
    address: string;
    amount?: number;
    USD?: number;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
}
export interface WidgetDataType {
    showWidgetModal: boolean;
    showSearchModal: boolean;
    toToken: TokenData;
    fromToken: TokenData;
    toggleWidget: () => void;
    toggleSearch: () => void;
    loading: boolean;
}
