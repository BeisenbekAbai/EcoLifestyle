import { PayloadAction, createSlice } from "@reduxjs/toolkit"




const initialState = {
    activeDarken: false
}

export const darkeningSlice = createSlice({
    name: 'darkening',
    initialState,
    reducers: {
        setDarkening(state, actcion: PayloadAction<boolean>){
            //@ts-ignore
            state.activeDarken = actcion.payload
        }
    }
})


export default darkeningSlice.reducer