import {ADD_ITEM, REMOVE_ITEM} from "./constants";

const initialState = {
    itemList: []
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemList: state.itemList.concat({
                    id: Math.random(),
                    name: action.payload
                })
            }
        case REMOVE_ITEM:
            return {
                ...state,
                itemList: state.itemList.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default uiReducer;
