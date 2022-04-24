import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({counter: counterReducer})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState(store.getState())
})

export type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store


// @ts-ignore
window.store = store;