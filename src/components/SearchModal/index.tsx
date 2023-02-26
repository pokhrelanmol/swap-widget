import React, { useState } from "react";
import Input from "../elements/Input";
import TokenItem from "../elements/TokenItem";
import { tokenData } from "../../constants/mockdata";
type SearchModal = {
    type: "from" | "to";
};

const SearchModal = (props: SearchModal) => {
    const [tokens, setTokens] = useState(tokenData.tokens.slice(0, 10));
    const [searchWord, setSearchWord] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchWord(e.target.value);
        if (e.target.value.trim()) {
            setTokens(
                tokenData.tokens
                    .filter((token) => {
                        return token.name
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase());
                    })
                    .slice(0, 100)
            );
        }
    };
    return (
        <div>
            <Input
                type="text"
                placeholder="Search"
                id="price"
                onChange={handleChange}
                value={searchWord}
                className="my-1 px-4 py-1 text-xl border border-gray-600 text-gray-400 outline-none font-mono w-full rounded-lg bg-transparent"
            />
            <ul className="w-full list-none h-full overflow-y-scroll overflow-x-hidden scrollbar-hide">
                {tokens.map((token, index) => (
                    <TokenItem
                        key={index}
                        tokenName={
                            token.name
                                ? token.name
                                : token.symbol
                                ? token.symbol
                                : "Unknown"
                        }
                        tokenImage={token.logoURI || ""}
                        tokenSymbol={token.symbol}
                        type={props.type}
                        tokenAddress={token.address}
                        decimals={token.decimals}
                    />
                ))}
            </ul>
        </div>
    );
};

export default SearchModal;
