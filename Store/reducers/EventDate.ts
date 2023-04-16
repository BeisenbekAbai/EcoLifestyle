import { PayloadAction, createSlice } from "@reduxjs/toolkit"




const initialState = {
    date: 'none',
    event: 'none',
}

export const dateEventSlice = createSlice({
    name: 'dataEvent',
    initialState,
    reducers: {
        setEventDate(state, actcion: PayloadAction<{Date: string, Event: string}>){
            //@ts-ignore
            state.date = actcion.payload.Date
            state.event = actcion.payload.Event
        }
    }
})


export default dateEventSlice.reducer