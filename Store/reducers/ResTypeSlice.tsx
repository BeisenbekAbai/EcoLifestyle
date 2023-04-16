import { PayloadAction, createSlice } from "@reduxjs/toolkit"




const initialState = {
    resourceType: 'Электричество'
}

export const resTypeSlice = createSlice({
    name: 'resourcesType',
    initialState,
    reducers: {
        setResType(state, actcion: PayloadAction<string>){
            //@ts-ignore
            state.resourceType = actcion.payload
        }
    }
})


export default resTypeSlice.reducer