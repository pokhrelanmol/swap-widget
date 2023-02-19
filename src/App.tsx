import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Swap from "./components/swap/Swap";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Swap />
        </div>
    );
}

export default App;
