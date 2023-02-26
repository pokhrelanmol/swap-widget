import { Action, actionTypes } from "./actions";
import { WidgetDataType } from "./types";

export const reducer = (
    state: WidgetDataType,
    action: Action
): WidgetDataType => {
    // what are the actions we need here?
    // 1. setFromToken
    // 2. setToToken
    // 3. setLoading
    // 4. toggleSearch
    // 5. toggleWidget

    switch (action.type) {
        case actionTypes.SET_FROM_TOKEN:
            return {
                ...state,
                fromToken: action.payload,
            };

        case actionTypes.SET_TO_TOKEN:
            return {
                ...state,
                toToken: action.payload,
            };

        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case actionTypes.TOGGLE_SEARCH:
            return {
                ...state,
                showSearchModal: action.payload,
            };

        case actionTypes.TOGGLE_WIDGET:
            return {
                ...state,
                showWidgetModal: action.payload,
            };
        default:
            return state;
    }
};
