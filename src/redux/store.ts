import {configureStore} from "@reduxjs/toolkit";
import selectedDate from "./slices/selectedDate";
import plansSlice from "./slices/PlansSlice";

export  const store = configureStore({
    reducer : {
        selectedDate : selectedDate ,
        plans : plansSlice
    }
})