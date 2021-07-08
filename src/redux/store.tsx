import {combineReducers, createStore} from "redux";
import galleryReducer from "./gallery-reducer";

let reducer = combineReducers({
    gallery:galleryReducer
})

let store = createStore(reducer)

export default store
