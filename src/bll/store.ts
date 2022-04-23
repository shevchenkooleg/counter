import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorege-utils";


const rootReducer = combineReducers({counter: counterReducer})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState(store.getState())
})

export type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;