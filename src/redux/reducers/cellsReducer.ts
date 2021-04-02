import {ActionType} from "../action-types";
import {Action, UpdateCellAction} from "../actions";
import {Cell} from "../cell";

interface CellsState {
    loading: boolean,
    error: string | null,
    order: string[],
    data: {
        [key: string]: Cell
    }
}

const initialState: CellsState = {
    loading: false,
    error: null,
    order: [],
    data: {},
}

const updateCellState = (state: CellsState, action: UpdateCellAction) => {
    const {id, content} = action.payload;
    return {
        ...state,
        data: {
            ...state.data,
            [id]: {
                ...state.data[id],
                content
            }
        }
    }
}

const cellsReducer = (state: CellsState = initialState, action: Action): CellsState => {
    switch (action.type) {
        case ActionType.UPDATE_CELL:
            return updateCellState(state, action)
        case ActionType.DELETE_CELL:
            return state;
        case ActionType.MOVE_CELL:
            return state;
        case ActionType.INSET_CELL_BEFORE:
            return state;
        default:
            return state
    }

}

export default cellsReducer;

            // const {id, content} = action.payload;
            // return {
            //     ...state,
            //     data: {
            //         ...state.data,
            //         [id]: {
            //             ...state.data[id],
            //             content
            //         }
            //     }
            // }
