import { FiSettings } from "react-icons/fi";
import Button from "../elements/Button";
import Input from "../elements/Input";
import SearchModal from "../SearchModal";
import { useWidgetContext } from "./WidgetProvider";
import { CgArrowsExchangeAltV, CgNametag } from "react-icons/cg";
import { useEffect, useState } from "react";
import { tokenData } from "../../constants/mockdata";
import { TokenData } from "./types";
import axios from "axios";
import { parseEther } from "ethers";
const SwapWidget = () => {
    const [type, setType] = useState<"to" | "from">("from");

    const {
        showSearchModal,
        toToken,
        fromToken,
        setToToken,
        setFromToken,
        toggleSearch,
        setLoading,
        loading,
    } = useWidgetContext();

    const handleSwapInput = () => {
        console.log(fromToken, toToken);
        setFromToken(toToken);
        setToToken(fromToken);
    };
    const handleClick = (type: "to" | "from") => {
        setType(type);
        toggleSearch();
    };

    const updateAmount = async (
        e: React.ChangeEvent<HTMLInputElement>,
        from: boolean
    ) => {
        // TODO: check from amount and get quote using API
        const amount = Number(e.target.value);
        if (from) {
            setLoading(true);
            setFromToken({ ...fromToken, amount: amount });
        } else {
            setToToken({ ...toToken, amount: amount });
        }
    };

    return (
        <div className="fixed w-[400px] h-[80Vh] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-sm bg-[#14213d] text-white rounded-lg">
            <div
                className="w-full px-5 py-2 border-b border-gray-600 rounded-t
     dark:border-gray-600 flex items-center justify-between focus:border-gray-300"
            >
                <h1 className="text-xl">Swap</h1>
                <button className="h-full border-non bg-transparent outline-none px-3">
                    <FiSettings className="cursor-pointer" />
                </button>
            </div>
            <div className="relative mt-1 rounded-md shadow-sm px-5 h-[80%] overflow-scroll scrollbar-hide">
                {showSearchModal ? (
                    <SearchModal type={type} />
                ) : (
                    <div className="flex flex-col h-full relative">
                        <div className="flex flex-col justify-center items-center mt-5 h-[45%] bg-gray-600 rounded-lg">
                            <Input
                                onChange={(e) => {
                                    updateAmount(e, true);
                                }}
                                value={fromToken.amount}
                                type="text"
                                placeholder="0.00"
                                id="price"
                                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
                            >
                                <Button
                                    token={fromToken}
                                    onClick={() => handleClick("from")}
                                />
                            </Input>
                            {fromToken.USD && (
                                <p className="text-gray-400 self-start ml-5 text-sm mt-2">
                                    1 {fromToken.symbol} = $ {fromToken.USD}
                                </p>
                            )}
                        </div>

                        <CgArrowsExchangeAltV
                            onClick={handleSwapInput}
                            className="text-6xl text-gray-400 p-1 border border-[#ccc] bg-bg rounded-full
               hover:animate-pulse cursor-pointer transition duration-300 absolute top-[50%] left-[50%]
              -translate-x-[50%] -translate-y-[50%]
            "
                        />

                        <div className="flex flex-col justify-center items-center mt-5 h-[45%] bg-gray-600 rounded-lg">
                            <Input
                                onChange={(e) => updateAmount(e, false)}
                                placeholder="0.00"
                                type="text"
                                id="price"
                                value={toToken.amount}
                                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
                                disabled={true}
                            >
                                <Button
                                    token={toToken}
                                    onClick={() => handleClick("to")}
                                />
                            </Input>
                            {toToken.USD && (
                                <p className="text-gray-400 self-start ml-5 text-sm mt-2">
                                    1 {toToken.symbol} = $ {toToken.USD}
                                </p>
                            )}
                        </div>
                        <p>{loading && "Fetching best prices..."}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwapWidget;
