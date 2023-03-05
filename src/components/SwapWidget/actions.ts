import { TokenData, WidgetDataType } from "./types";
import { tokenData } from "../../constants/mockdata";
export const initialState: WidgetDataType = {
    showSearchModal: false,
    showWidgetModal: true,
    toToken: tokenData.tokens[1] as unknown as TokenData,
    fromToken: tokenData.tokens[0] as unknown as TokenData,
    toggleWidget: () => {},
    toggleSearch: () => {},
    loading: false,
};
export enum actionTypes {
    SET_FROM_TOKEN,
    SET_TO_TOKEN,
    SET_LOADING,
    TOGGLE_SEARCH,
    TOGGLE_WIDGET,
}

type SET_FROM_TOKEN = {
    type: actionTypes.SET_FROM_TOKEN;
    payload: TokenData;
};

type SET_TO_TOKEN = {
    type: actionTypes.SET_TO_TOKEN;
    payload: TokenData;
};

type SET_LOADING = {
    type: actionTypes.SET_LOADING;
    payload: boolean;
};

type TOGGLE_SEARCH = {
    type: actionTypes.TOGGLE_SEARCH;
    payload: boolean;
};

type TOGGLE_WIDGET = {
    type: actionTypes.TOGGLE_WIDGET;
    payload: boolean;
};

export type Action =
    | SET_FROM_TOKEN
    | SET_TO_TOKEN
    | SET_LOADING
    | TOGGLE_SEARCH
    | TOGGLE_WIDGET;
