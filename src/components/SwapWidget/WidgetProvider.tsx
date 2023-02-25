import React, { useState, createContext, useContext, useEffect } from "react";
import { TokenData } from "./types";
import { tokenData } from "../../constants/mockdata";
import { parseEther } from "ethers";
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
            console.log(widgetData.fromToken);
            (async () => {
                const res = await fetch(
                    `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${
                        widgetData.fromToken?.address
                    }&toTokenAddress=${
                        widgetData.toToken?.address
                    }&amount=${parseEther(
                        widgetData.fromToken?.amount!.toString()
                    )}`
                );
                // const res = await fetch(
                //     `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=0x111111111117dC0aa78b770fA6A738034120C302&toTokenAddress=0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9&amount=10000000000000000000`
                // );
                const data = await res.json();
                console.log(data);
            })();
        }
    }, [widgetData.fromToken.address, widgetData.fromToken.amount]);

    return (
        <WidgetContext.Provider value={widgetData}>
            {children}
        </WidgetContext.Provider>
    );
};

export default WidgetProvider;
