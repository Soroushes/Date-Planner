import {createSlice , PayloadAction} from "@reduxjs/toolkit";
interface selected {
    showDate : string ,
    date? : object
}
const initialState : selected = {
    showDate : "" ,
} ;
const selectedDate = createSlice({
    name : "selected date",
    initialState ,
    reducers : {
        SELECT_DATE : (state : selected , action : PayloadAction<selected>)=>{
            return action.payload ;
        }
    }
})

export const {SELECT_DATE} = selectedDate.actions ;
export default selectedDate.reducer ;
