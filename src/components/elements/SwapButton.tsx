import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { useWidgetContext } from "../SwapWidget/WidgetProvider";

const SwapButton = () => {
    const { state } = useWidgetContext();
    const [insufficientBalance, setInsufficientBalance] = useState(false);
    const { address } = useAccount();
    const balance = useBalance({
        address: address,
        token: state.fromToken.address as `0x${string}`,
        watch: true,
        formatUnits: "ether",
        onSettled(data, error) {
            if (error) {
                console.log(error);
            }
            if (data?.value.gte(state.fromToken.amount || 0)) {
                setInsufficientBalance(false);
            } else {
                setInsufficientBalance(true);
            }
        },
    });

    const handleSwap = () => {
        // call 1inch api here
        alert("Yet to implement this");
    };

    useEffect(() => {
        if (state.fromToken.amount && state.fromToken.address) {
            balance.refetch();
        }
    }, [state.fromToken.amount, state.fromToken.address]);
    return (
        <button
            className={`text-gray-400 border border-zinc-400 px-5 py-3 tracking-wider ${
                insufficientBalance ? "text-sm" : "text-xl"
            } font-mono bg-bg    rounded-lg hover:animate-pulse cursor-pointer transition duration-100 w-60`}
            onClick={() => handleSwap()}
            disabled={insufficientBalance}
        >
            {insufficientBalance ? "Insufficient Balance" : "Swap"}
        </button>
    );
};

export default SwapButton;
