import { FiSettings } from "react-icons/fi";
import Button from "../elements/Button";
import Input from "../elements/Input";
import SearchModal from "../SearchModal";
import { useWidgetContext } from "./WidgetProvider";
import { CgArrowsExchangeAltV } from "react-icons/cg";

import { actionTypes } from "./actions";
import { useState } from "react";
const SwapWidget = () => {
    const [type, setType] = useState<"to" | "from">("from");

    const { state, dispatch } = useWidgetContext();

    const handleSwapInput = () => {
        dispatch({
            type: actionTypes.SET_FROM_TOKEN,
            payload: state.toToken,
        });
        dispatch({
            type: actionTypes.SET_TO_TOKEN,
            payload: state.fromToken,
        });
    };
    const handleClick = (type: "to" | "from") => {
        setType(type);
        dispatch({
            type: actionTypes.TOGGLE_SEARCH,
            payload: true,
        });
    };

    const updateAmount = async (
        e: React.ChangeEvent<HTMLInputElement>,
        from: boolean
    ) => {
        const amount = Number(e.target.value);
        if (from) {
            dispatch({
                type: actionTypes.SET_LOADING,
                payload: true,
            });

            dispatch({
                type: actionTypes.SET_FROM_TOKEN,
                payload: { ...state.fromToken, amount: amount },
            });
        } else {
            dispatch({
                type: actionTypes.SET_TO_TOKEN,
                payload: { ...state.toToken, amount: amount },
            });
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
                {state.showSearchModal ? (
                    <SearchModal type={type} />
                ) : (
                    <div className="flex flex-col h-full relative">
                        <div className="flex flex-col justify-center items-center mt-5 h-[45%] bg-gray-600 rounded-lg">
                            <Input
                                onChange={(e) => {
                                    updateAmount(e, true);
                                }}
                                value={state.fromToken.amount}
                                type="text"
                                placeholder="0.00"
                                id="price"
                                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
                            >
                                <Button
                                    token={state.fromToken}
                                    onClick={() => handleClick("from")}
                                />
                            </Input>
                            {state.fromToken.USD && (
                                <p className="text-gray-400 self-start ml-5 text-sm mt-2">
                                    1 {state.fromToken.symbol} = ${" "}
                                    {state.fromToken.USD}
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
                                value={state.toToken.amount}
                                className="px-4 py-7 text-2xl border border-gray-500 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
                                disabled={true}
                            >
                                <Button
                                    token={state.toToken}
                                    onClick={() => handleClick("to")}
                                />
                            </Input>
                            {state.toToken.USD && (
                                <p className="text-gray-400 self-start ml-5 text-sm mt-2">
                                    1 {state.toToken.symbol} = ${" "}
                                    {state.toToken.USD}
                                </p>
                            )}
                        </div>
                        <p>{state.loading && "Fetching best prices..."}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SwapWidget;
