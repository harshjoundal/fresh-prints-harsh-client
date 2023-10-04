import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import HomeReducer from '../Pages/Home/Home.slice'

const reducers = combineReducers({
  homeslice:HomeReducer
});

export const store = configureStore({
    reducer : reducers
})

export type AppDispatch = typeof store.dispatch;