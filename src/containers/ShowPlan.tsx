import React from "react";
import {useLocation} from "react-router-dom";
import ViewPlans from "../base/ViewPlans";
import AddPlans from "../base/AddPlans";
import {useSelector} from "react-redux";
const ShowPlan = ()=>{
    const {showDate} = useSelector((state : any) => state.selectedDate) ;
    const {pathname} = useLocation() ;
    return(
        <>
            <div className={'w-100 bg-white overflow-hidden'}>
                <h3 className={'mt-4 text-center'}>{showDate}</h3>
            </div>
            {
                pathname==='/' ? <ViewPlans/> : <AddPlans/>
            }
        </>

    )
}
export default ShowPlan ;