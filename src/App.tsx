import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import Modal from "./components/Modal"
import ShowButton from "./components/ShowButton";
import SwapWidget from "./components/SwapWidget";
import { useWidgetContext } from "./components/SwapWidget/WidgetProvider";

function App() {
    const [count, setCount] = useState(0);

    const { showWidgetModal, toggleWidget } = useWidgetContext();

    const handleClick = () => {
        toggleWidget();
    };

    return (
        <div className="flex  items-center min-h-screen">
            {/* <Swap /> */}
            <div className="flex flex-col items-center">
                <img src={reactLogo} alt="react logo" className="h-12" />
                <h1 className="text-2xl font-bold">React + Tailwind</h1>
                <p className="text-gray-500">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="text-blue-500"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    Count is: {count}
                </button>
            </div>
            {showWidgetModal ? <SwapWidget /> : ""}
            <ShowButton setShow={handleClick} show={showWidgetModal} />
        </div>
    );
}
export default App;
