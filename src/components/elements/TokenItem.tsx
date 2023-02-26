import React, { useState } from "react";
import { MdCheck, MdFactCheck } from "react-icons/md";
import { useWidgetContext } from "../SwapWidget/WidgetProvider";
import { TokenInputProps } from "./types";

const TokenItem = (props: TokenInputProps) => {
    const [selected, setSelected] = useState(false);
    const { toggleSearch } = useWidgetContext();
    const { setToToken, setFromToken, toToken, fromToken, setLoading } =
        useWidgetContext();

    const handleClick = () => {
        if (props.type === "from") {
            setLoading(true);
            setFromToken({
                ...fromToken,
                name: props.tokenName,
                symbol: props.tokenSymbol!,
                logoURI: props.tokenImage,
                address: props.tokenAddress,
                decimals: props.decimals,
            });
        } else {
            setToToken({
                ...toToken,
                name: props.tokenName,
                symbol: props.tokenSymbol!,
                logoURI: props.tokenImage,
                address: props.tokenAddress,
                decimals: props.decimals,
            });
        }
        setSelected((prev) => !prev);
        toggleSearch();
    };

    return (
        <li className="list-none my-[2px] " onClick={handleClick}>
            <a
                href="#"
                className="flex items-center text-dark px-3 py-1 text-base font-bold
         bg-slate-800 border border-gray-700 hover:bg-secondary-900 group hover:shadow"
            >
                <img
                    src={
                        props.tokenImage
                            ? props.tokenImage
                            : "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                    }
                    alt="Ethereum"
                    className="w-8 h-8 mr-3 rounded-full overflow-hidden"
                />
                <span className="flex-1 ml-3 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {props.tokenName}
                </span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-400 rounded dark:bg-gray-700 dark:text-gray-400">
                    {selected ? <MdCheck className="text-xs" /> : ""}
                </span>
            </a>
        </li>
    );
};

export default TokenItem;
