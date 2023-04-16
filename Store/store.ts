import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ActivePageReducer from './reducers/ActivePageSlice'
import Darkening from "./reducers/Darkening";
import DateEvent from './reducers/EventDate'
import ResTypeReducer from "./reducers/ResTypeSlice";
import NewsSlice from "./reducers/NewsSlice";
import AuthenticationReducer from './reducers/AuthenSlice'



const rootReducer = combineReducers({
    ActivePageReducer,
    Darkening,
    DateEvent,
    ResTypeReducer,
    NewsSlice,
    AuthenticationReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']