import React from "react";
import { SearchBarProps } from "./types";

const SearchBar = (props: SearchBarProps) => {
    return (
        <form>
            <input type="text" placeholder="Search" />
            {props.children}
        </form>
    );
};

export default SearchBar;
