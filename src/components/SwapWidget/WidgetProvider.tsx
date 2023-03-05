import React, {
    useState,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { TokenData, WidgetContextProps } from "./types";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import axios from "axios";
import { initialState, actionTypes, Action } from "./actions";
import { reducer } from "./reducer";

export const WidgetContext = createContext<WidgetContextProps>({
    state: initialState,
    dispatch: () => null,
});

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
                    `https://min-api.cryptocompare.com/data/price?fsym=${state.fromToken.symbol}&tsyms=USD`
                );
                const toTokenRes = await axios.get(
                    `https://min-api.cryptocompare.com/data/price?fsym=${state.toToken.symbol}&tsyms=USD`
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

                dispatch({
                    type: actionTypes.SET_FROM_TOKEN,
                    payload: {
                        ...state.fromToken,
                        USD: fromTokenRes.data.USD,
                    },
                });

                dispatch({
                    type: actionTypes.SET_TO_TOKEN,
                    payload: formattedData,
                });
                dispatch({
                    type: actionTypes.SET_LOADING,
                    payload: false,
                });
            })();
        }
    }, [
        state.fromToken.address,
        state.fromToken.amount,
        state.toToken.address,
    ]);
    return (
        <WidgetContext.Provider value={{ state, dispatch }}>
            {children}
        </WidgetContext.Provider>
    );
};

export default WidgetProvider;

export const useWidgetContext = () => useContext(WidgetContext);
