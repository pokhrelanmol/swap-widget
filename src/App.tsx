import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import Modal from "./components/Modal"
import ShowButton from "./components/ShowButton";
import SwapWidget from "./components/SwapWidget";
import { actionTypes } from "./components/SwapWidget/actions";
import { useWidgetContext } from "./components/SwapWidget/WidgetProvider";

function App() {
    const { state, dispatch } = useWidgetContext();

    const handleClick = () => {
        dispatch({
            type: actionTypes.TOGGLE_WIDGET,
            payload: !state.showWidgetModal,
        });
    };

    return (
        <div className="flex  items-center min-h-screen">
            {/* <Swap /> */}

            {state.showWidgetModal ? <SwapWidget /> : ""}
            <ShowButton setShow={handleClick} show={state.showWidgetModal} />
        </div>
    );
}
export default App;
