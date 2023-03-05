import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WidgetProvider from "./components/SwapWidget/WidgetProvider";
import "./index.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, polygon, optimism, arbitrum, goerli],
    [publicProvider()]
);

const wagmiClient = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <WidgetProvider>
            <WagmiConfig client={wagmiClient}>
                <App />
            </WagmiConfig>
        </WidgetProvider>
    </React.StrictMode>
);
