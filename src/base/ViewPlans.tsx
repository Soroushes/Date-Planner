import {Container, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import {PlansInt} from "../interfaces/plansInt";
import {useSelector} from "react-redux";
import MiniSinglePlan from "./miniSinglePlan";
import {Link} from "react-router-dom";

const ViewPlans = ()=>{
    const {showDate} = useSelector((state:any) => state.selectedDate);
    const allPlans = useSelector((state : any)=>state.plans);
    const [plans , setPlans] = useState<PlansInt[]>([]) ;
    useEffect(()=>{
        const upComing = allPlans.filter((plan : PlansInt)=>plan.date===showDate) ;
        setPlans(upComing) ;
    },[showDate])
    return(
        <div className={'w-100 bg-white overflow-hidden'} style={{height : '30vh'}}>
            <Container sx={{overflowY : "scroll"}} className={'h-100'} maxWidth={'md'}>
                <Grid className={'h-100 m-0 w-100'} container justifyContent={'center'} alignItems={"center"}>         {
                        plans.length ?(
                            plans.map((plan : PlansInt , index: number)=>{
                                return <Grid className={'p-0 px-3'} key={index}  item xs={12} md={6}>
                                    <Link to={'/view/'+plan.id}>
                                        <MiniSinglePlan {...plan}/>
                                    </Link>
                                </Grid>
                            })
                            )
                            :
                            <span style={{fontSize : 20}} className="text-muted">no plan on this day</span>
                    }
                </Grid>
            </Container>
        </div>
    )
}
export default ViewPlans ;