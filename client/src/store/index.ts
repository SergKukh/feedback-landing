import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./reducers/feedbackSlice";

const rootReducer = combineReducers({
    feedbackReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']