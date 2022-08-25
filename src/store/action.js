import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const getTubeStatus = createAsyncThunk("status/getgetTubeStatus",(args, {rejectWithValue})=>{
    try{
        return axios.get("https://api.tfl.gov.uk/Line/Mode/Tube/Status").then((res)=> res.data);
    }catch (error){
        rejectWithValue(error)
    }
})

