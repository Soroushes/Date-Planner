import {createSlice} from "@reduxjs/toolkit";
import {PlansInt} from "../../interfaces/plansInt";
const initialState : PlansInt[] = []
const plansSlice = createSlice({
    name: "plans",
    initialState,
    reducers : {
        ADD : (state , action)=>{
            state.push(action.payload) ;
        },
        DELETE : (state : PlansInt[] , action)=>{
            state.splice(action.payload , 1) ;
        },
        EDIT : (state , action) => {
            return action.payload;
        }
    }

})
export default plansSlice.reducer;
export const {ADD , DELETE , EDIT} = plansSlice.actions ;