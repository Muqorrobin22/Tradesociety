import {createSlice} from "@reduxjs/toolkit";


const faqSlice = createSlice({
    name: "faq",
    initialState: {
        showFaq: null,
    },
    reducers: {
        setShowFaq: (state, action) => {
            state.showFaq = action.payload;
        }
    }
})

export const {setShowFaq} = faqSlice.actions;
export default faqSlice.reducer