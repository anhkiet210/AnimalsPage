import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        allPost: null
    },
    reducers: {
        getAllPost: (state, action) => {
            state.allPost = action.payload
        } 
    }
})

export default postSlice;