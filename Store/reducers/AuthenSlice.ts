import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { stat } from "fs"




const initialState = {
    authBlockActive: false,
    authType: 1
}

export const authenticationSlice = createSlice({
    name: 'authencticationBlock',
    initialState,
    reducers: {
        setActiveAuthBlock(state, action: PayloadAction<boolean>){
            state.authBlockActive = action.payload
        },
        setAuthType(state, action: PayloadAction<number>){
            state.authType = action.payload
        }
    }
})

export default authenticationSlice.reducer