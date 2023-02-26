import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { TokenData, WidgetDataType } from "./types";
import { tokenData } from "../../constants/mockdata";
import { formatUnits, parseEther, parseUnits } from "ethers";
import axios from "axios";
import { initialState } from "./actions";
import { reducer } from "./reducer";
// export interface WidgetContextProps {
//     showWidgetModal: boolean;
//     showSearchModal: boolean;
//     toToken: TokenData;
//     fromToken: TokenData;
//     toggleWidget: () => void;
//     toggleSearch: () => void;
//     setToToken: (token: TokenData) => void;
//     setFromToken: (token: TokenData) => void;
//     loading: boolean;
//     setLoading: (loading: boolean) => void;
// }

export const WidgetContext = createContext<WidgetDataType>({
    showSearchModal: false,
    showWidgetModal: false,
    toToken: {
        ...(tokenData.tokens[1] as unknown as TokenData),
    },
    fromToken: {
        ...(tokenData.tokens[0] as unknown as TokenData),
    },
    toggleWidget: () => {},
    toggleSearch: () => {},
    loading: false,
});

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};

const WidgetProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        if (state.fromToken.amount) {
            (async () => {
                const res = await axios.get(
                    `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${
                        state.fromToken?.address
                    }&toTokenAddress=${
                        state.toToken?.address
                    }&amount=${parseUnits(
                        state.fromToken?.amount!.toString(),
                        state.fromToken?.decimals
                    )}`
                );

                const data = await res.data;
                const _toToken = data.toToken;
                let amt = formatUnits(data.toTokenAmount, _toToken.decimals);
                amt = (+amt).toFixed(6);

                // fetch exchange rate in USD for token
                const fromTokenRes = await axios.get(
                    `https://min-api.cryptocompare.com/data/price?fsym=${widgetData.fromToken.symbol}&tsyms=USD`
                );
                const toTokenRes = await axios.get(
                    `https://min-api.cryptocompare.com/data/price?fsym=${widgetData.toToken.symbol}&tsyms=USD`
                );

                const formattedData: TokenData = {
                    address: _toToken.address,
                    symbol: _toToken.symbol,
                    decimals: _toToken.decimals,
                    name: _toToken.name,
                    logoURI: _toToken.logoURI,
                    amount: Number(amt),
                    USD: toTokenRes.data.USD,
                };

                setWidgetData((prev) => ({
                    ...prev,
                    toToken: formattedData,
                    fromToken: {
                        ...prev.fromToken,
                        USD: fromTokenRes.data.USD,
                    },
                }));

                setLoading(false);
            })();
        }
    }, [
        widgetData.fromToken.address,
        widgetData.fromToken.amount,
        widgetData.toToken.address,
    ]);

    return (
        <WidgetContext.Provider value={widgetData}>
            {children}
        </WidgetContext.Provider>
    );
};

export default WidgetProvider;
