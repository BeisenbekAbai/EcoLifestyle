import { PayloadAction, createSlice } from "@reduxjs/toolkit"



interface PageState {
    page: 'WelcomePage' | 'HomePage' | 'CalculatorPage' | 'CalendarPage' 
        | 'AboutUsPage' | 'AdvicesPage' |'NewsPage' | 'ResourcesPage' | 'ContactUsPage'
}

const initialState: PageState = {
    page: 'WelcomePage'
}

export const activePageSlice = createSlice({
    name: 'activePage',
    initialState,
    reducers: {
        setActivePage(state, actcion: PayloadAction<string>){
            //@ts-ignore
            state.page = actcion.payload
        }
    }
})

export default activePageSlice.reducer