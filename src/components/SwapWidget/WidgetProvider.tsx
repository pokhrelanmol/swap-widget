import React, { useState, createContext, useContext, useEffect } from "react";
import { TokenData } from "./types";
import { tokenData } from "../../constants/mockdata";
import { formatUnits, parseEther, parseUnits } from "ethers";
export interface WidgetContextProps {
    showWidgetModal: boolean;
    showSearchModal: boolean;
    toToken: TokenData;
    fromToken: TokenData;
    toggleWidget: () => void;
    toggleSearch: () => void;
    setToToken: (token: TokenData) => void;
    setFromToken: (token: TokenData) => void;
}

export const WidgetContext = createContext<WidgetContextProps>({
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
    setToToken: (token: TokenData) => {},
    setFromToken: (token: TokenData) => {},
});

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};

const WidgetProvider = ({ children }: { children: React.ReactNode }) => {
    const toggleWidget = () => {
        setWidgetData((prev) => ({
            ...prev,
            showWidgetModal: !prev.showWidgetModal,
        }));
    };

    const toggleSearch = () => {
        setWidgetData((prev) => ({
            ...prev,
            showSearchModal: !prev.showSearchModal,
        }));
    };

    const setToToken = (token: TokenData) => {
        setWidgetData((prev) => ({
            ...prev,
            toToken: { ...token },
        }));
    };

    const setFromToken = (token: TokenData) => {
        setWidgetData((prev) => ({
            ...prev,
            fromToken: { ...token },
        }));
    };

    const [widgetData, setWidgetData] = useState({
        showWidgetModal: false,
        showSearchModal: false,
        toToken: {
            ...(tokenData.tokens[1] as unknown as TokenData),
        },
        fromToken: {
            ...(tokenData.tokens[0] as unknown as TokenData),
        },
        toggleWidget,
        toggleSearch,
        setToToken,

        setFromToken,
    });
    useEffect(() => {
        if (widgetData.fromToken.amount) {
            (async () => {
                const res = await fetch(
                    `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${
                        widgetData.fromToken?.address
                    }&toTokenAddress=${
                        widgetData.toToken?.address
                    }&amount=${parseUnits(
                        widgetData.fromToken?.amount!.toString(),
                        widgetData.fromToken?.decimals
                    )}`
                );

                const data = await res.json();
                const _toToken = data.toToken;
                let amt = formatUnits(data.toTokenAmount, _toToken.decimals);
                amt = (+amt).toFixed(6);
                const formattedData: TokenData = {
                    address: _toToken.address,
                    symbol: _toToken.symbol,
                    decimals: _toToken.decimals,
                    name: _toToken.name,
                    logoURI: _toToken.logoURI,
                    amount: Number(amt),
                };
                setWidgetData((prev) => ({
                    ...prev,
                    toToken: formattedData,
                }));
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
