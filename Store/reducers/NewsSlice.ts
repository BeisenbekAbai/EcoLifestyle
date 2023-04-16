import { PayloadAction, createSlice } from "@reduxjs/toolkit"




const initialState = {
    news: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews(state, action){
            state.news = action.payload
        }
    }
})

export default newsSlice.reducer