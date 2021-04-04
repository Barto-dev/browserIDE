import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import {ActionType} from "./action-types";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

const updateId  = store.getState().cells.order[0];

store.dispatch({
    type: ActionType.INSET_CELL_BEFORE,
    payload: {
       id: null,
       type: 'code'
    }
})

store.dispatch({
    type: ActionType.INSET_CELL_BEFORE,
    payload: {
       id: null,
       type: 'text'
    }
})

store.dispatch({
    type: ActionType.INSET_CELL_BEFORE,
    payload: {
       id: null,
       type: 'text'
    }
})

store.dispatch({
    type: ActionType.INSET_CELL_BEFORE,
    payload: {
       id: null,
       type: 'code'
    }
})
