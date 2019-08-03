import {createStore} from "redux"
import genReducer from "./reducers/genReducer"

export const store = createStore(genReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
