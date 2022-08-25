import { createSlice } from "@reduxjs/toolkit"
import {getTubeStatus} from '../action'

/* export const getTubeStatus = createAsyncThunk('status/getTubeStatus',async()=>{
    return fetch("https://api.tfl.gov.uk/Line/Mode/Tube/Status").then((res)=>res.json())
}) */

const statusSlice = createSlice({
    name: "status",
    initialState: {
        data: [],
        error:false,
        loading:false
    },
    extraReducers: {
        [getTubeStatus.pending]: (state,{payload})=> {
            state.loading = true
        },
        [getTubeStatus.fulfilled]: (state,{payload})=>{
            state.loading = false;
            state.data = payload;
            state.error = false
        },
        [getTubeStatus.rejected]: (state,{payload})=> {
            state.loading= false;
            state.error = true;
        }
    }
})

export default statusSlice;