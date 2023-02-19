import React from "react";
import { FiArrowDown, FiSettings } from "react-icons/fi";
const Swap = () => {
    return (
        <div className="w-[400px] h-[400px] shadow-sm bg-[#14213d] text-white rounded-lg p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Swap</h1>
                <FiSettings className="cursor-pointer" />
            </div>
            {/* inputs */}
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Swap;
