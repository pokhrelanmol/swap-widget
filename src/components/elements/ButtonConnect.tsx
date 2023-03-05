import React from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const ButtonConnect = () => {
    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    return (
        <div>
            <button
                onClick={() => connect()}
                className="bg-bg border border-stone-400 text-white w-60 px-5 py-3 tracking-wider text-lg  rounded-lg font-bold"
            >
                Connect Wallet
            </button>
        </div>
    );
};

export default ButtonConnect;
