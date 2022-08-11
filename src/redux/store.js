import { createStore } from "redux";
import noteReducer from "./reducer";



export const store = createStore(noteReducer);